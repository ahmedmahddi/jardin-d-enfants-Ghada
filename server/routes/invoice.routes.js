const express = require('express');
const invoiceController = require('../controllers/invoice.controller.js');

const invoiceRouter = express.Router();

invoiceRouter.post('/', invoiceController.createInvoice);
invoiceRouter.put('/:invoiceID/pay', invoiceController.markInvoiceAsPaid);
invoiceRouter.get('/report', invoiceController.generateReport);

invoiceRouter.get('/all', invoiceController.getAllInvoices);
invoiceRouter.get('/:invoiceID', invoiceController.getInvoiceById);
invoiceRouter.put('/:invoiceID', invoiceController.updateInvoice);
invoiceRouter.delete('/:invoiceID', invoiceController.deleteInvoice);

module.exports = invoiceRouter;
