import {
  savePaymentInq,
  getPaymentInq,
  getPaymentInqById,
  getPaymentInqByBillId,
  getPaymentInqByPaymentId,
  updatePaymentInq,
  deletePaymentInq,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const savePaymentInqService = async data => {
  try {
    const paymentInq = await savePaymentInq(data);
    return paymentInq;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqService = async () => {
  try {
    const paymentInqs = await getPaymentInq();
    return paymentInqs;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByIdService = async id => {
  try {
    const paymentInq = await getPaymentInqById(id);
    return paymentInq;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByBillIdService = async billID => {
  try {
    const paymentInqs = await getPaymentInqByBillId(billID);
    return paymentInqs;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPaymentInqByPaymentIdService = async paymentID => {
  try {
    const paymentInqs = await getPaymentInqByPaymentId(paymentID);
    return paymentInqs;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updatePaymentInqService = async (id, data) => {
  try {
    const paymentInq = await updatePaymentInq(id, data);
    return paymentInq;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deletePaymentInqService = async id => {
  try {
    const paymentInq = await deletePaymentInq(id);
    return paymentInq;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
