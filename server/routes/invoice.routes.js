import { Router } from "express";
import * as invoiceController from "../controllers/invoice.controller.js";

const invoiceRouter = Router();

invoiceRouter.post("/", invoiceController.createInvoice);
invoiceRouter.put("/:invoiceID/pay", invoiceController.markInvoiceAsPaid);
invoiceRouter.get("/report", invoiceController.generateReport);

invoiceRouter.get("/all", invoiceController.getAllInvoices);
invoiceRouter.get("/:invoiceID", invoiceController.getInvoiceById);
invoiceRouter.put("/:invoiceID", invoiceController.updateInvoice);
invoiceRouter.delete("/:invoiceID", invoiceController.deleteInvoice);

export default invoiceRouter;
