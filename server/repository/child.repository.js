import AppError from "../utils/appError.js";
import { Child } from "../models/index.js";

export const saveChild = async data => {
  try {
    const child = await Child.create(data);
    return child;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateChild = async (id, data) => {
  try {
    const [affectedRows, [updatedChild]] = await Child.update(data, {
      where: { id },
      returning: true,
    });
    if (affectedRows === 0) {
      throw new AppError("Data Not Found", 404);
    }
    return updatedChild;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteChild = async id => {
  try {
    const affectedRows = await Child.destroy({ where: { id } });
    if (affectedRows === 0) {
      throw new AppError("Data Not Found", 404);
    }
    return affectedRows;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getChildById = async id => {
  try {
    const child = await Child.findOne({ where: { id } });
    if (!child) {
      throw new AppError("Data Not Found", 404);
    }
    return child;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getAllChildren = async () => {
  try {
    const children = await Child.findAll();
    return children;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};
