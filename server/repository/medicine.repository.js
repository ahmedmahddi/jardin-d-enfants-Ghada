import { Medicine } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveMedicine = async data => {
  try {
    const medicine = await Medicine.create(data);
    return medicine;
  } catch (err) {
    throw new AppError(err.message || "Failed to add medicine", 500);
  }
};

// Update an existing medicine
export const updateMedicine = async (id, data) => {
  try {
    const medicine = await Medicine.findByPk(id);
    if (!medicine) {
      throw new AppError("Medicine not found", 404);
    }
    await medicine.update(data);
    return medicine;
  } catch (err) {
    throw new AppError(err.message || "Failed to update medicine", 500);
  }
};

// Delete a medicine
export const deleteMedicine = async id => {
  try {
    const medicine = await Medicine.findByPk(id);
    if (!medicine) {
      throw new AppError("Medicine not found", 404);
    }
    await medicine.destroy();
    return medicine;
  } catch (err) {
    throw new AppError(err.message || "Failed to delete medicine", 500);
  }
};

// Get all medicines for a specific child
export const getMedicines = async childID => {
  try {
    const medicines = await Medicine.findAll({ where: { childID } });
    return medicines;
  } catch (err) {
    throw new AppError(err.message || "Failed to fetch medicines", 500);
  }
};

// Get medicines for a specific staff
export const getMedicinesForStaff = async staffID => {
  try {
    const medicines = await Medicine.findAll({ where: { staffID } });
    return medicines;
  } catch (err) {
    throw new AppError(err.message || "Failed to fetch medicines", 500);
  }
};

// Get medicines for a specific parent's child
export const getMedicinesForParents = async parentID => {
  try {
    const medicines = await Medicine.findAll({ where: { parentID } });
    return medicines;
  } catch (err) {
    throw new AppError(err.message || "Failed to fetch medicines", 500);
  }
};
