import express from "express";
import {
  saveScheduleController,
  updateScheduleController,
  deleteScheduleController,
  getSchedulesController,
  getScheduleForStaffController,
} from "../controllers/index.js";

const ScheduleRouter = express.Router();

// Route to add a new schedule
ScheduleRouter.post("/", saveScheduleController);

// Route to update a schedule by ID
ScheduleRouter.put("/:id", updateScheduleController);

// Route to delete a schedule by ID
ScheduleRouter.delete("/:id", deleteScheduleController);

// Route to get schedules for a specific child by child ID
ScheduleRouter.get("/child/:id", getSchedulesController);

// Route to get schedules assigned to the authenticated staff
ScheduleRouter.get("/staff", getScheduleForStaffController);

export default ScheduleRouter;
