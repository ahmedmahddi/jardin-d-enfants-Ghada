import {
  saveChild,
  updateChild,
  deleteChild,
  getChildById,
  getAllChildren,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveChildService = async data => {
  try {
    return await saveChild(data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateChildService = async (id, data) => {
  try {
    return await updateChild(id, data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteChildService = async id => {
  try {
    return await deleteChild(id);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getChildByIdService = async id => {
  try {
    return await getChildById(id);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllChildrenService = async () => {
  try {
    return await getAllChildren();
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
