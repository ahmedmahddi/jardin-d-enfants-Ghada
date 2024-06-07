import {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
  getMedicinesForStaff,
  getMedicinesForParents,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveMedicineService = async (data, parentID) => {
  try {
    data.parentID = parentID;
    const medicine = await saveMedicine(data);
    return medicine;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateMedicineService = async (id, data) => {
  try {
    const medicine = await updateMedicine(id, data);
    return medicine;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteMedicineService = async id => {
  try {
    const medicine = await deleteMedicine(id);
    return medicine;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMedicinesService = async childID => {
  try {
    const medicines = await getMedicines(childID);
    return medicines;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMedicinesForStaffService = async staffID => {
  try {
    const medicines = await getMedicinesForStaff(staffID);
    return medicines;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMedicinesForParentsService = async parentID => {
  try {
    const medicines = await getMedicinesForParents(parentID);
    return medicines;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
