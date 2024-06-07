import express from "express";
import {
  saveEventController,
  updateEventController,
  deleteEventController,
  getEventsController,
} from "../controllers/index.js";

const EventRouter = express.Router();

// Route to add a new event
EventRouter.post("/", saveEventController);

// Route to update an event by ID
EventRouter.put("/:id", updateEventController);

// Route to delete an event by ID
EventRouter.delete("/:id", deleteEventController);

// Route to get all events
EventRouter.get("/", getEventsController);

export default EventRouter;
