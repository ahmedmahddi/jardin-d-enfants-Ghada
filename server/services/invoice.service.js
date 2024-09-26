const { Invoice, InvoiceHistory } = require("../models/invoice.model.js");
const Children = require("../models/children.model.js");
const User = require("../models/user.model.js");
const { sendEmail, getEmailTemplate } = require("../utils/email.js");
const path = require("path");
const logger = require("../middleware/wlogger.middleware.js");

const getUnpaidInvoicesSummary = async parentId => {
  const unpaidInvoices = await Invoice.findAll({
    where: {
      parentId,
      status: "unpaid",
    },
  });

  const totalAmount = unpaidInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const breakdown = unpaidInvoices.map(inv => ({
    childName: inv.childName,
    amount: inv.amount,
  }));

  return { totalAmount, breakdown };
};

const createAndSendInvoice = async (childId, parentId, amount) => {
  logger.info("createAndSendInvoice: Start", { childId, parentId, amount });

  // Check if required fields are provided
  if (!childId || !parentId || !amount) {
    logger.error("createAndSendInvoice: Missing fields", {
      childId,
      parentId,
      amount,
    });
    throw new Error("All fields are required");
  }

  // Fetch child and parent details
  const child = await Children.findByPk(childId);
  const parentUser = await User.findByPk(parentId);

  if (!child || !parentUser) {
    logger.error("createAndSendInvoice: Child or Parent not found", {
      childId,
      parentId,
    });
    throw new Error("Child or Parent not found");
  }

  // Generate issue and due dates
  const issueDate = new Date();
  const dueDate = new Date();
  dueDate.setDate(issueDate.getDate() + 15);

  // Create invoice record
  const invoice = await Invoice.create({
    childId,
    parentId,
    amount,
    parentEmail: parentUser.email,
    childName: child.childName,
    issueDate,
    dueDate,
  });

  // Get summary of unpaid invoices (if needed for the email)
  const { totalAmount, breakdown } = await getUnpaidInvoicesSummary(parentId);

  // Use the email template with the necessary replacements
  const htmlContent = getEmailTemplate("invoice", {
    invoiceID: invoice.invoiceID,
    parentName: parentUser.name,
    parentPhone: child.parentPhone,
    parentEmail: parentUser.email,
    issueDate: invoice.issueDate.toISOString().slice(0, 10),
    dueDate: invoice.dueDate.toISOString().slice(0, 10),
    children: breakdown, // Include the child breakdown if applicable
    totalAmount,
  });

  // Prepare email message
  const emailMessage = `
    <p>Bonjour ${parentUser.name},</p>
    <p>Votre facture est maintenant disponible.</p>
    <p>Merci pour votre confiance!</p>
  `;

  const emailHtml = `
    ${emailMessage}
    <br><br>
    ${htmlContent}
  `;

  // Try sending the email using Nodemailer
  try {
    await sendEmail({
      to: invoice.parentEmail,
      subject: `Votre Facture - ${invoice.invoiceID}`,
      html: emailHtml, // Send the generated HTML content
      attachments: [
        {
          filename: "logo-JDG.png",
          path: path.join(__dirname, "../assets/logo-JDG.png"),
          cid: "logo@jdg", // Reference logo in the HTML template if needed
        },
      ],
    });
  } catch (error) {
    logger.error("createAndSendInvoice: Sending email failed", { error });
    throw new Error("Sending email failed");
  }

  logger.info(
    "createAndSendInvoice: Invoice created and email sent successfully",
    { invoice }
  );

  return invoice; // Return the created invoice
};

const markInvoiceAsPaid = async invoiceID => {
  logger.info("markInvoiceAsPaid: Start", { invoiceID });

  const invoice = await Invoice.findByPk(invoiceID, {
    include: [
      { model: Children, attributes: ["parentPhone"], as: "child" },
      { model: User, attributes: ["email", "name"], as: "parent" },
    ],
  });

  if (!invoice) {
    logger.error("markInvoiceAsPaid: Invoice not found", { invoiceID });
    throw new Error("Invoice not found");
  }

  const {
    childId,
    parentId,
    amount,
    parentEmail,
    childName,
    issueDate,
    dueDate,
  } = invoice;

  if (
    !invoice.invoiceID ||
    !childId ||
    !parentId ||
    !amount ||
    !parentEmail ||
    !childName ||
    !issueDate ||
    !dueDate
  ) {
    logger.error("markInvoiceAsPaid: Missing required fields", {
      invoiceID,
      childId,
      parentId,
      amount,
      parentEmail,
      childName,
      issueDate,
      dueDate,
    });
    throw new Error("Missing required fields for InvoiceHistory");
  }

  invoice.status = "paid";
  logger.info("markInvoiceAsPaid: Updating invoice status to paid", {
    invoice,
  });
  await invoice.save();

  try {
    await InvoiceHistory.create({
      invoiceID,
      childId,
      parentId,
      status: "paid",
      amount,
      parentEmail,
      childName,
      issueDate,
      dueDate,
    });
  } catch (error) {
    logger.error("markInvoiceAsPaid: Error creating InvoiceHistory", {
      error: error.message,
      fields: {
        invoiceID,
        childId,
        parentId,
        status: "paid",
        amount,
        parentEmail,
        childName,
        issueDate,
        dueDate,
      },
    });
    throw new Error("Error creating InvoiceHistory");
  }

  const emailData = {
    invoiceID: invoice.invoiceID,
    parentName: invoice.parent.name,
    parentPhone: invoice.child.parentPhone,
    parentEmail: invoice.parent.email,
    issueDate: invoice.issueDate.toISOString().slice(0, 10),
    amount: invoice.amount,
    childName: invoice.childName,
  };

  logger.info("markInvoiceAsPaid: Email data", { emailData });

  let html;
  try {
    html = getEmailTemplate("receipt", emailData);
  } catch (error) {
    logger.error("markInvoiceAsPaid: Error generating email template", {
      error: error.message,
      emailData,
    });
    throw new Error("Error generating email template");
  }

  logger.info("markInvoiceAsPaid: Sending payment receipt email", { invoice });
  try {
    await sendEmail({
      to: invoice.parent.email,
      subject: "Payment Receipt",
      html,
    });
  } catch (error) {
    logger.error("markInvoiceAsPaid: Error sending email", {
      error: error.message,
      emailData,
    });
    throw new Error("Error sending email");
  }

  logger.info(
    "markInvoiceAsPaid: Invoice marked as paid and receipt email sent",
    { invoice }
  );
};

const generateMonthlyReport = async () => {
  logger.info("generateMonthlyReport: Start");

  try {
    const [
      totalInvoices,
      paidInvoices,
      unpaidInvoices,
      totalPaidAmount,
      totalOutstandingAmount,
    ] = await Promise.all([
      Invoice.count(),
      Invoice.count({ where: { status: "paid" } }),
      Invoice.count({ where: { status: "unpaid" } }),
      Invoice.sum("amount", { where: { status: "paid" } }) || 0,
      Invoice.sum("amount", { where: { status: "unpaid" } }) || 0,
    ]);

    logger.info("generateMonthlyReport: Total invoices counted", {
      totalInvoices,
    });
    logger.info("generateMonthlyReport: Paid invoices counted", {
      paidInvoices,
    });
    logger.info("generateMonthlyReport: Unpaid invoices counted", {
      unpaidInvoices,
    });
    logger.info("generateMonthlyReport: Total paid amount calculated", {
      totalPaidAmount,
    });
    logger.info("generateMonthlyReport: Total outstanding amount calculated", {
      totalOutstandingAmount,
    });

    const report = {
      totalInvoices,
      paidInvoices,
      unpaidInvoices,
      totalPaidAmount: totalPaidAmount || 0,
      totalOutstandingAmount: totalOutstandingAmount || 0,
    };

    logger.info("generateMonthlyReport: Report generated", report);
    return report;
  } catch (error) {
    logger.error("generateMonthlyReport: Failed to generate report", { error });
    throw new Error("Failed to generate monthly report");
  }
};

const getAllInvoices = async (page, limit) => {
  logger.info("getAllInvoices: Start");

  const offset = (page - 1) * limit;
  logger.info("getAllInvoices: Calculated offset", { offset });

  const { count, rows: invoices } = await Invoice.findAndCountAll({
    include: [
      { model: Children, attributes: ["childName"], as: "child" },
      { model: User, attributes: ["email"], as: "parent" },
    ],
    offset,
    limit,
  });

  const formattedInvoices = invoices.map(invoice => ({
    invoiceID: invoice.invoiceID,
    status: invoice.status,
    amount: invoice.amount,
    childName: invoice.child.childName,
    parentEmail: invoice.parent.email,
    createdAt: invoice.createdAt,
    updatedAt: invoice.updatedAt,
  }));

  logger.info("getAllInvoices: Fetched paginated invoices", {
    formattedInvoices,
    count,
  });

  return { totalCount: count, invoices: formattedInvoices };
};

const getInvoiceById = async invoiceID => {
  logger.info("getInvoiceById: Start", { invoiceID });

  const invoice = await Invoice.findByPk(invoiceID, {
    include: [
      {
        model: Children,
        attributes: ["childName", "parentPhone", "parentEmail", "parentName"],
        as: "child",
      },
      { model: User, attributes: ["email", "name"], as: "parent" },
    ],
  });

  if (!invoice) {
    logger.error("getInvoiceById: Invoice not found", { invoiceID });
    throw new Error("Invoice not found");
  }

  const formattedInvoice = {
    invoiceID: invoice.invoiceID.toString(),
    status: invoice.status,
    amount: invoice.amount,
    childName: invoice.child.childName,
    parentEmail: invoice.child.parentEmail,
    parentName: invoice.child.parentName,
    parentPhone: invoice.child.parentPhone,
    issueDate: invoice.issueDate.toISOString().slice(0, 10),
    dueDate: invoice.dueDate.toISOString().slice(0, 10),
    createdAt: invoice.createdAt,
    updatedAt: invoice.updatedAt,
  };

  logger.info("getInvoiceById: Fetched invoice by ID", { formattedInvoice });
  return formattedInvoice;
};

const updateInvoice = async (invoiceID, updatedData) => {
  logger.info("updateInvoice: Start", { invoiceID, updatedData });

  const invoice = await Invoice.findByPk(invoiceID);
  if (!invoice) {
    logger.error("updateInvoice: Invoice not found", {
      invoiceID,
      updatedData,
    });
    throw new Error("Invoice not found");
  }

  Object.assign(invoice, updatedData);
  logger.info("updateInvoice: Updating invoice", { invoice });
  await invoice.save();

  logger.info("updateInvoice: Invoice updated successfully", { invoice });
  return invoice;
};

const deleteInvoice = async invoiceID => {
  logger.info("deleteInvoice: Start", { invoiceID });

  const invoice = await Invoice.findByPk(invoiceID);
  if (!invoice) {
    logger.error("deleteInvoice: Invoice not found", { invoiceID });
    throw new Error("Invoice not found");
  }

  logger.info("deleteInvoice: Deleting invoice", { invoiceID });
  await invoice.destroy();

  logger.info("deleteInvoice: Invoice deleted successfully", { invoiceID });
  return invoice;
};

module.exports = {
  createAndSendInvoice,
  markInvoiceAsPaid,
  generateMonthlyReport,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
