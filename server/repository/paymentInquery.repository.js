import { PaymentInq } from "../models/index.js";
import AppError from "../utils/appError.js";

export const savePaymentInq = async data => {
  try {
    const paymentInq = await PaymentInq.create(data);
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const getPaymentInq = async () => {
  try {
    const paymentInq = await PaymentInq.findAll();
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const getPaymentInqById = async id => {
  try {
    const paymentInq = await PaymentInq.findByPk(id);
    if (!paymentInq) {
      throw new AppError("PaymentInq Details not Found", 404);
    }
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const getPaymentInqByBillId = async id => {
  try {
    const paymentInq = await PaymentInq.findAll({ where: { billId: id } });
    if (!paymentInq) {
      throw new AppError("PaymentInq Details not Found", 404);
    }
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const getPaymentInqByPaymentId = async id => {
  try {
    const paymentInq = await PaymentInq.findAll({ where: { paymentId: id } });
    if (!paymentInq) {
      throw new AppError("PaymentInq Details not Found", 404);
    }
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const updatePaymentInq = async (id, data) => {
  try {
    const [updatedRows, [paymentInq]] = await PaymentInq.update(data, {
      where: { id },
      returning: true,
    });
    if (!updatedRows) {
      throw new AppError("PaymentInq Details not Found", 404);
    }
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};

export const deletePaymentInq = async id => {
  try {
    const paymentInq = await PaymentInq.destroy({ where: { id } });
    if (!paymentInq) {
      throw new AppError("PaymentInq Details not Found", 404);
    }
    return paymentInq;
  } catch (err) {
    throw new AppError(`Internal Server Error: ${err}`, 500);
  }
};
