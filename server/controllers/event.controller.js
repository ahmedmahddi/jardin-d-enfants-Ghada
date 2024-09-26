const EventService = require("../services/event.service.js");
const logger = require("../middleware/wlogger.middleware.js");

const createEvent = async (req, res) => {
  logger.info("EventController: Create event request received", {
    body: req.body,
  });

  try {
    const event = await EventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    logger.error("EventController: Error creating event", { error });
    res.status(400).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  logger.info("EventController: Get all events request received");

  try {
    const events = await EventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    logger.error("EventController: Error fetching all events", { error });
    res.status(400).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  logger.info("EventController: Get event by ID request received", {
    id: req.params.id,
  });

  try {
    const event = await EventService.getEventById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    logger.error("EventController: Error fetching event by ID", { error });
    res.status(404).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  logger.info("EventController: Update event request received", {
    id: req.params.id,
    body: req.body,
  });

  try {
    const event = await EventService.updateEvent(req.params.id, req.body);
    res.status(200).json(event);
  } catch (error) {
    logger.error("EventController: Error updating event", { error });
    res.status(400).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  logger.info("EventController: Delete event request received", {
    id: req.params.id,
  });

  try {
    await EventService.deleteEvent(req.params.id);
    res.status(204).end();
  } catch (error) {
    logger.error("EventController: Error deleting event", { error });
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
