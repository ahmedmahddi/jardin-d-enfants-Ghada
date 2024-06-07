import express from "express";
import {
  savePaymentInqController,
  getPaymentInqController,
  getPaymentInqByIdController,
  getPaymentInqByBillIdController,
  getPaymentInqByPaymentIdController,
  updatePaymentInqController,
  deletePaymentInqController,
} from "../controllers/index.js";

const PaymentInqRouter = express.Router();

// Route to add a new payment inquiry
PaymentInqRouter.post("/", savePaymentInqController);

// Route to get all payment inquiries
PaymentInqRouter.get("/", getPaymentInqController);

// Route to get a payment inquiry by ID
PaymentInqRouter.get("/:id", getPaymentInqByIdController);

// Route to get payment inquiries by bill ID
PaymentInqRouter.get("/bill/:id", getPaymentInqByBillIdController);

// Route to get payment inquiries by payment ID
PaymentInqRouter.get("/payment/:id", getPaymentInqByPaymentIdController);

// Route to update a payment inquiry by ID
PaymentInqRouter.put("/:id", updatePaymentInqController);

// Route to delete a payment inquiry by ID
PaymentInqRouter.delete("/:id", deletePaymentInqController);

export default PaymentInqRouter;
