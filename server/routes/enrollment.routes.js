import { Router } from "express";
import {
  createEnrollmentHandler,
  getAllEnrollmentsHandler,
  getEnrollmentByIdHandler,
  updateEnrollmentStatusHandler,
  deleteEnrollmentHandler,
} from "../controllers/enrollment.controller.js";

const enrollmentRouter = Router();

enrollmentRouter.post("/", createEnrollmentHandler);
enrollmentRouter.get("/", getAllEnrollmentsHandler);
enrollmentRouter.get("/:id", getEnrollmentByIdHandler);
enrollmentRouter.patch("/:id/status", updateEnrollmentStatusHandler);
enrollmentRouter.delete("/:id", deleteEnrollmentHandler);

export default enrollmentRouter;
