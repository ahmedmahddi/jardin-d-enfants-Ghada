const express = require("express");
const {
  createEnrollmentHandler,
  getAllEnrollmentsHandler,
  getEnrollmentByIdHandler,
  updateEnrollmentStatusHandler,
  deleteEnrollmentHandler,
} = require("../controllers/enrollment.controller.js");

const enrollmentRouter = express.Router();

enrollmentRouter.post("/", createEnrollmentHandler);
enrollmentRouter.get("/", getAllEnrollmentsHandler);
enrollmentRouter.get("/:id", getEnrollmentByIdHandler);
enrollmentRouter.patch("/:id/status", updateEnrollmentStatusHandler);
enrollmentRouter.delete("/:id", deleteEnrollmentHandler);

module.exports = enrollmentRouter;
