import {
  saveEnrollmentService,
  updateEnrollmentService,
  deleteEnrollmentService,
  getEnrollmentService,
  getAllEnrollmentService,
} from "../services/enrollment.service.js";
import Success from "../utils/success.js";
import AppError from "../utils/appError.js";

export const saveEnrollmentController = async (req, res) => {
  try {
    const enrollment = await saveEnrollmentService(req.body);
    res.status(201).json(Success(enrollment, "Successfully enrollment added."));
  } catch (err) {
    console.error("Error in saveEnrollmentController:", err);
    if (err instanceof AppError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const updateEnrollmentController = async (req, res) => {
  try {
    const enrollment = await updateEnrollmentService(req.params.id, req.body);
    res.json(Success(enrollment, "Successfully enrollment updated."));
  } catch (err) {
    console.error("Error in updateEnrollmentController:", err);
    if (err instanceof AppError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const deleteEnrollmentController = async (req, res) => {
  try {
    await deleteEnrollmentService(req.params.id);
    res.json(Success({}, "Successfully enrollment deleted."));
  } catch (err) {
    console.error("Error in deleteEnrollmentController:", err);
    if (err instanceof AppError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const getEnrollmentController = async (req, res) => {
  try {
    const enrollment = await getEnrollmentService(req.params.id);
    res.json(Success(enrollment, "Successfully fetched single enrollment."));
  } catch (err) {
    console.error("Error in getEnrollmentController:", err);
    if (err instanceof AppError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const getAllEnrollmentController = async (req, res) => {
  try {
    const enrollments = await getAllEnrollmentService();
    res.json(Success(enrollments, "Successfully fetched all enrollments."));
  } catch (err) {
    console.error("Error in getAllEnrollmentController:", err);
    if (err instanceof AppError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};
