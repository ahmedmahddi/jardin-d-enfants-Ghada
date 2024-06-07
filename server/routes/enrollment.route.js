import express from "express";
import {
  saveEnrollmentController,
  updateEnrollmentController,
  deleteEnrollmentController,
  getEnrollmentController,
  getAllEnrollmentController,
} from "../controllers/index.js";

const EnrollmentRouter = express.Router();

// Route to add a new enrollment
EnrollmentRouter.post("/", saveEnrollmentController);

// Route to update an enrollment by ID
EnrollmentRouter.put("/:id", updateEnrollmentController);

// Route to delete an enrollment by ID
EnrollmentRouter.delete("/:id", deleteEnrollmentController);

// Route to get a single enrollment by ID
EnrollmentRouter.get("/:id", getEnrollmentController);

// Route to get all enrollments
EnrollmentRouter.get("/", getAllEnrollmentController);

export default EnrollmentRouter;
