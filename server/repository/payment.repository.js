import { Payment } from "../models/index.js";
import AppError from "../utils/appError.js";

//Create Payment
export const savePayment = async data => {
  try {
    const payment = await Payment.create(data);
    return payment;
  } catch (err) {
    throw new AppError(err.message || "Failed to add payment", 500);
  }
};

// Get payment by ID
export const getPaymentById = async id => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new AppError("Payment not found", 404);
    }
    return payment;
  } catch (err) {
    throw new AppError(err.message || "Failed to fetch payment", 500);
  }
};

// Get all payments
export const getPayments = async () => {
  try {
    const payments = await Payment.findAll();
    return payments;
  } catch (err) {
    throw new AppError(err.message || "Failed to fetch payments", 500);
  }
};

// Update an existing payment
export const updatePayment = async (id, data) => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new AppError("Payment not found", 404);
    }
    await payment.update(data);
    return payment;
  } catch (err) {
    throw new AppError(err.message || "Failed to update payment", 500);
  }
};

// Delete a payment
export const deletePayment = async id => {
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      throw new AppError("Payment not found", 404);
    }
    await payment.destroy();
    return payment;
  } catch (err) {
    throw new AppError(err.message || "Failed to delete payment", 500);
  }
};

// Get payment by Bill ID
export const getPaymentByBillId = async billID => {
  try {
    const payment = await Payment.findOne({ where: { billID } });
    if (!payment) {
      throw new AppError("Payment not found", 404);
    }
    return payment;
  } catch (err) {
    throw new AppError(
      err.message || "Failed to fetch payment by bill ID",
      500
    );
  }
};
