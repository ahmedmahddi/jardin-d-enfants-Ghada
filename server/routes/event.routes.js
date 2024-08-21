import { Router } from "express";
import * as EventController from "../controllers/event.controller.js";

const eventRouter = Router();

eventRouter.post("/", EventController.createEvent);
eventRouter.get("/", EventController.getAllEvents);
eventRouter.get("/:id", EventController.getEventById);
eventRouter.put("/:id", EventController.updateEvent);
eventRouter.delete("/:id", EventController.deleteEvent);

export default eventRouter;
