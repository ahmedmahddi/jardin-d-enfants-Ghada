const express = require("express");
const EventController = require("../controllers/event.controller.js");

const eventRouter = express.Router();

eventRouter.post("/", EventController.createEvent);
eventRouter.get("/", EventController.getAllEvents);
eventRouter.get("/:id", EventController.getEventById);
eventRouter.put("/:id", EventController.updateEvent);
eventRouter.delete("/:id", EventController.deleteEvent);

module.exports = eventRouter;
