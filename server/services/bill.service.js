import {
  saveBill,
  getAllBills,
  getBillByID,
  getBillsByChildId,
  updateBill,
  deleteBill,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveBillService = async data => {
  try {
    const bill = await saveBill(data);
    return bill;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillService = async () => {
  try {
    const bills = await getAllBills();
    return bills;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillByIdService = async id => {
  try {
    const bill = await getBillByID(id);
    return bill;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getBillByChildIdService = async childId => {
  try {
    const bills = await getBillsByChildId(childId);
    return bills;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateBillService = async (id, data) => {
  try {
    const bill = await updateBill(id, data);
    return bill;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteBillService = async id => {
  try {
    const bill = await deleteBill(id);
    return bill;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
