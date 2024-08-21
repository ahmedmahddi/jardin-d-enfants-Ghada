import { Invoice, Path, InvoiceHistory } from "../models/invoice.model.js";
import Children from "../models/children.model.js";
import User from "../models/user.model.js";
import {
  sendEmail,
  getEmailTemplate,
  generatePdf,
  uploadToDrive,
} from "../utils/email.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "../middleware/wlogger.middleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

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

  if (!childId || !parentId || !amount) {
    logger.error("createAndSendInvoice: Missing fields", {
      childId,
      parentId,
      amount,
    });
    throw new Error("All fields are required");
  }

  const child = await Children.findByPk(childId);
  const parentUser = await User.findByPk(parentId);

  if (!child || !parentUser) {
    logger.error("createAndSendInvoice: Child or Parent not found", {
      childId,
      parentId,
    });
    throw new Error("Child or Parent not found");
  }

  const issueDate = new Date();
  const dueDate = new Date();
  dueDate.setDate(issueDate.getDate() + 15);

  const invoice = await Invoice.create({
    childId,
    parentId,
    amount,
    parentEmail: parentUser.email,
    childName: child.childName,
    issueDate,
    dueDate,
  });

  const { totalAmount, breakdown } = await getUnpaidInvoicesSummary(parentId);

  const parentNameForFile = parentUser.name.replace(/ /g, "_");
  const pdfPath = path.join(
    __dirname,
    `../invoices/invoice-${invoice.invoiceID}-${parentNameForFile}.pdf`
  );
  const htmlContent = getEmailTemplate("invoice", {
    invoiceID: invoice.invoiceID,
    parentName: parentUser.name,
    parentPhone: child.parentPhone,
    parentEmail: parentUser.email,
    issueDate: invoice.issueDate.toISOString().slice(0, 10),
    dueDate: invoice.dueDate.toISOString().slice(0, 10),
    children: breakdown,
    totalAmount,
  });

  try {
    await generatePdf(htmlContent, pdfPath);
  } catch (error) {
    logger.error("createAndSendInvoice: PDF generation failed", { error });
    throw new Error("PDF generation failed");
  }

  let driveFile;
  try {
    driveFile = await uploadToDrive(
      pdfPath,
      `invoice-${invoice.invoiceID}-${parentNameForFile}.pdf`
    );
    console.log("Drive file data:", driveFile);
  } catch (error) {
    logger.error("createAndSendInvoice: Google Drive upload failed", { error });
    throw new Error("Google Drive upload failed");
  }

  try {
    const pathRecord = await Path.create({
      type: "invoice",
      path: driveFile.webViewLink,
      fileId: driveFile.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("Path record data:", pathRecord);
    invoice.path = pathRecord.path;
    invoice.fileId = pathRecord.fileId;
    await invoice.save();
  } catch (error) {
    logger.error("createAndSendInvoice: Path saving failed", { error });
    throw new Error("Path saving failed");
  }

  const emailMessage = `
    <p>Bonjour ${parentUser.name},</p>
    <p>Votre facture est maintenant disponible.</p>
    <p>Veuillez trouver en pièce jointe votre facture.</p>
    <p>Merci pour votre confiance!</p>
  `;

  const emailHtml = `
    ${emailMessage}
    <br>
    <a href="${driveFile.webViewLink}">Télécharger votre facture</a>
  `;

  try {
    await sendEmail({
      to: invoice.parentEmail,
      subject: "Votre Facture",
      html: emailHtml,
      attachments: [
        {
          filename: `invoice-${invoice.invoiceID}-${parentUser.name.replace(/ /g, "_")}.pdf`,
          path: pdfPath,
          cid: "invoice",
        },
        {
          filename: "logo-JDG.png",
          path: path.join(__dirname, "../assets/logo-JDG.png"),
          cid: "logo@jdg",
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
  return invoice;
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

  const totalInvoices = await Invoice.count();
  logger.info("generateMonthlyReport: Total invoices counted", {
    totalInvoices,
  });

  const paidInvoices = await Invoice.count({ where: { status: "paid" } });
  logger.info("generateMonthlyReport: Paid invoices counted", { paidInvoices });

  const unpaidInvoices = await Invoice.count({ where: { status: "unpaid" } });
  logger.info("generateMonthlyReport: Unpaid invoices counted", {
    unpaidInvoices,
  });

  const totalPaidAmount = await Invoice.sum("amount", {
    where: { status: "paid" },
  });
  logger.info("generateMonthlyReport: Total paid amount calculated", {
    totalPaidAmount,
  });

  const totalOutstandingAmount = await Invoice.sum("amount", {
    where: { status: "unpaid" },
  });
  logger.info("generateMonthlyReport: Total outstanding amount calculated", {
    totalOutstandingAmount,
  });

  const report = {
    totalInvoices,
    paidInvoices,
    unpaidInvoices,
    totalPaidAmount,
    totalOutstandingAmount,
  };

  logger.info("generateMonthlyReport: Report generated", report);
  return report;
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

export {
  createAndSendInvoice,
  markInvoiceAsPaid,
  generateMonthlyReport,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
