import * as invoiceService from "../services/invoice.service.js";
import logger from "../middleware/wlogger.middleware.js";

const createInvoice = async (req, res) => {
  const { childId, parentId, amount } = req.body;
  try {
    const invoice = await invoiceService.createAndSendInvoice(
      childId,
      parentId,
      amount
    );
    logger.info("createInvoice: Invoice created and email sent", {
      childId,
      parentId,
      amount,
    });
    res.status(201).json(invoice);
  } catch (error) {
    logger.error("createInvoice: Error", {
      error: error.message,
      childId,
      parentId,
      amount,
    });
    res.status(400).json({ message: error.message });
  }
};

const markInvoiceAsPaid = async (req, res) => {
  const { invoiceID } = req.params;
  try {
    await invoiceService.markInvoiceAsPaid(invoiceID);
    logger.info("markInvoiceAsPaid: Invoice marked as paid", { invoiceID });
    res.status(200).send("Invoice marked as paid");
  } catch (error) {
    logger.error("markInvoiceAsPaid: Error", {
      error: error.message,
      invoiceID,
    });
    res.status(400).json({ message: error.message });
  }
};

const generateReport = async (req, res) => {
  try {
    const report = await invoiceService.generateMonthlyReport();
    logger.info("generateReport: Report generated", report);
    res.status(200).json(report);
  } catch (error) {
    logger.error("generateReport: Error", { error: error.message });
    res.status(400).json({ message: error.message });
  }
};

const getAllInvoices = async (req, res) => {
  try {
    const { page, limit } = req.query;
    logger.info("Controller getAllInvoices: Received params", { page, limit });

    const { totalCount, invoices } = await invoiceService.getAllInvoices(
      parseInt(page), // Ensure page is parsed as an integer
      parseInt(limit) // Ensure limit is parsed as an integer
    );

    logger.info("getAllInvoices: Fetched paginated invoices", { invoices });
    res.status(200).json({ totalCount, invoices });
  } catch (error) {
    logger.error("getAllInvoices: Error", { error: error.message });
    res.status(400).json({ message: error.message });
  }
};

const getInvoiceById = async (req, res) => {
  const { invoiceID } = req.params;
  try {
    const invoice = await invoiceService.getInvoiceById(invoiceID);
    logger.info("getInvoiceById: Fetched invoice by ID", {
      invoiceID,
      invoice,
    });
    res.status(200).json(invoice);
  } catch (error) {
    logger.error("getInvoiceById: Error", { error: error.message, invoiceID });
    res.status(400).json({ message: error.message });
  }
};

const updateInvoice = async (req, res) => {
  const { invoiceID } = req.params;
  const updatedData = req.body;
  try {
    const invoice = await invoiceService.updateInvoice(invoiceID, updatedData);
    logger.info("updateInvoice: Invoice updated", { invoiceID, updatedData });
    res.status(200).json(invoice);
  } catch (error) {
    logger.error("updateInvoice: Error", {
      error: error.message,
      invoiceID,
      updatedData,
    });
    res.status(400).json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  const { invoiceID } = req.params;
  try {
    await invoiceService.deleteInvoice(invoiceID);
    logger.info("deleteInvoice: Invoice deleted", { invoiceID });
    res.status(200).send("Invoice deleted");
  } catch (error) {
    logger.error("deleteInvoice: Error", { error: error.message, invoiceID });
    res.status(400).json({ message: error.message });
  }
};

export {
  createInvoice,
  markInvoiceAsPaid,
  generateReport,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
