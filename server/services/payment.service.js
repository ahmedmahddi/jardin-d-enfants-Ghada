import {
  savePayment,
  getPaymentById,
  getPayments,
  updatePayment,
  deletePayment,
  getPaymentByBillId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const savePaymentService = async data => {
  try {
    const payment = await savePayment(data);
    return payment;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentByIdService = async id => {
  try {
    const payment = await getPaymentById(id);
    return payment;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentService = async () => {
  try {
    const payments = await getPayments();
    return payments;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updatePaymentService = async (id, data) => {
  try {
    const payment = await updatePayment(id, data);
    return payment;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deletePaymentService = async id => {
  try {
    const payment = await deletePayment(id);
    return payment;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentByBillIdService = async billID => {
  try {
    const payment = await getPaymentByBillId(billID);
    return payment;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
