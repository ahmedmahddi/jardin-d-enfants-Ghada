import {
  saveMedicineService,
  updateMedicineService,
  deleteMedicineService,
  getMedicinesService,
  getMedicinesForStaffService,
  getMedicinesForParentsService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveMedicineController = async (req, res, next) => {
  try {
    const parentID = req.user.id;
    const medicine = await saveMedicineService(req.body, parentID);
    res.status(201).json(Success(medicine, " Successfully Medicine Added."));
  } catch (err) {
    next(err);
  }
};

export const updateMedicineController = async (req, res, next) => {
  try {
    const medicine = await updateMedicineService(req.params.id, req.body);
    res.json(Success(medicine, "Successfully Medicine Updated."));
  } catch (err) {
    next(err);
  }
};

export const deleteMedicineController = async (req, res, next) => {
  try {
    const medicine = await deleteMedicineService(req.params.id);
    res.json(Success(medicine, "Successfully Medicine Deleted."));
  } catch (err) {
    next(err);
  }
};

export const getMedicinesController = async (req, res, next) => {
  try {
    const childID = req.params.id;
    const medicines = await getMedicinesService(childID);
    res.json(Success(medicines, "Successfully Fetched Medicines Details."));
  } catch (err) {
    next(err);
  }
};

export const getMedicinesForStaffController = async (req, res, next) => {
  try {
    const staffID = req.user.id;
    const medicines = await getMedicinesForStaffService(staffID);
    res.json(Success(medicines, "Successfully Fetched Medicines Details."));
  } catch (err) {
    next(err);
  }
};

export const getMedicinesForParentController = async (req, res, next) => {
  try {
    const parentID = req.params.id;
    const medicines = await getMedicinesForParentsService(parentID);
    res.json(Success(medicines, "Successfully Fetched Medicines Details."));
  } catch (err) {
    next(err);
  }
};
