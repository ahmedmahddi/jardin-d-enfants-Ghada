import { Enrollment } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveEnrollment = async data => {
  try {
    const enrollment = await Enrollment.create(data);
    return enrollment;
  } catch (err) {
    // Log the error for debugging purposes
    console.error("Error in saveEnrollment:", err);
    throw new AppError("Failed to save enrollment.", 500);
  }
};

export const updateEnrollment = async (id, data) => {
  try {
    const [affectedRows, [updatedEnrollment]] = await Enrollment.update(data, {
      where: { id },
      returning: true,
    });
    if (affectedRows === 0) {
      throw new AppError("Enrollment not found.", 404);
    }
    return updatedEnrollment;
  } catch (err) {
    console.error("Error in updateEnrollment:", err);
    throw new AppError("Failed to update enrollment.", 500);
  }
};

export const deleteEnrollment = async id => {
  try {
    const affectedRows = await Enrollment.destroy({ where: { id } });
    if (affectedRows === 0) {
      throw new AppError("Enrollment not found.", 404);
    }
    return affectedRows;
  } catch (err) {
    console.error("Error in deleteEnrollment:", err);
    throw new AppError("Failed to delete enrollment.", 500);
  }
};

export const getEnrollment = async id => {
  try {
    const enrollment = await Enrollment.findOne({ where: { id } });
    if (!enrollment) {
      throw new AppError("Enrollment not found.", 404);
    }
    return enrollment;
  } catch (err) {
    console.error("Error in getEnrollment:", err);
    throw new AppError("Failed to fetch enrollment.", 500);
  }
};

export const getAllEnrollments = async () => {
  try {
    const enrollments = await Enrollment.findAll();
    return enrollments;
  } catch (err) {
    console.error("Error in getAllEnrollments:", err);
    throw new AppError("Failed to fetch enrollments.", 500);
  }
};
