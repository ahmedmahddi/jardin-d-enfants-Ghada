import { Bill } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveBill = async data => {
  try {
    const billData = await Bill.create(data);
    return billData;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getAllBills = async () => {
  try {
    const bills = await Bill.findAll();
    return bills;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getBillByID = async id => {
  try {
    const bill = await Bill.findOne({ where: { id } });
    return bill;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getBillsByChildId = async childId => {
  try {
    const bills = await Bill.findAll({ where: { childID: childId } });
    return bills;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateBill = async (id, data) => {
  try {
    const updatedBill = await Bill.update(data, {
      where: { id },
      returning: true,
    });
    if (!updatedBill[1].length) {
      throw new AppError("Data Not Found", 404);
    }
    return updatedBill[1][0];
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteBill = async id => {
  try {
    const billData = await Bill.destroy({ where: { id } });
    if (!billData) {
      throw new AppError("Data Not Found", 404);
    }
    return billData;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};
