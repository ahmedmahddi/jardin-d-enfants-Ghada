const Event = require("../models/event.model.js");
const User = require("../models/user.model.js");
const logger = require("../middleware/wlogger.middleware.js");
const { google } = require("googleapis");
const { getOAuth2Client } = require("../utils/auth.js");


let calendar;

const initializeCalendar = async () => {
  try {
    const auth = await getOAuth2Client();
    calendar = google.calendar({ version: "v3", auth });
  } catch (error) {
    logger.error("Error initializing Google Calendar client", { error });
    throw error;
  }
};

// Ensure the calendar is initialized before making requests
const ensureCalendarInitialized = async () => {
  if (!calendar) {
    await initializeCalendar();
  }
};

const createEvent = async data => {
  logger.info("createEvent: Start", { data });

  if (!data.title || !data.startDate || !data.endDate || !data.description) {
    logger.error("createEvent: Missing fields", data);
    throw new Error("Title, startDate, endDate, and description are required");
  }

  try {
    await ensureCalendarInitialized();

    const users = await User.findAll();
    const attendees = users.map(user => ({ email: user.email }));

    // Convert date strings to ISO 8601 format if necessary
    const startDate = new Date(data.startDate).toISOString();
    const endDate = new Date(data.endDate).toISOString();

    const googleEvent = {
      summary: data.title,
      description: data.description,
      start: {
        dateTime: startDate,
        timeZone: "Africa/Tunis",
      },
      end: {
        dateTime: endDate,
        timeZone: "Africa/Tunis",
      },
      attendees: attendees,
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: googleEvent,
      sendUpdates: "all",
    });

    const event = await Event.create({
      ...data,
      googleCalendarEventId: response.data.id,
    });

    logger.info("createEvent: Event created and notifications sent", { event });
    return event;
  } catch (error) {
    logger.error("createEvent: Error creating event", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error("Error creating event");
  }
};

const getAllEvents = async () => {
  logger.info("getAllEvents: Start");

  try {
    const events = await Event.findAll();
    logger.info("getAllEvents: Events fetched", { events });
    return events;
  } catch (error) {
    logger.error("getAllEvents: Error fetching events", { error });
    throw new Error("Error fetching events");
  }
};

const getEventById = async id => {
  logger.info("getEventById: Start", { id });

  try {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error("Event not found");
    }
    logger.info("getEventById: Event fetched", { event });
    return event;
  } catch (error) {
    logger.error("getEventById: Error fetching event by ID", { error });
    throw new Error("Error fetching event by ID");
  }
};

const updateEvent = async (id, data) => {
  logger.info("updateEvent: Start", { id, data });

  try {
    await ensureCalendarInitialized(); 

    const event = await getEventById(id);
    await event.update(data);

    const googleEvent = {
      summary: data.title,
      description: data.description,
      start: {
        dateTime: data.startDate,
        timeZone: "Africa/Tunis",
      },
      end: {
        dateTime: data.endDate,
        timeZone: "Africa/Tunis",
      },
    };

    await calendar.events.update({
      calendarId: "primary",
      eventId: event.googleCalendarEventId,
      resource: googleEvent,
      sendUpdates: "all",
    });

    logger.info("updateEvent: Event updated", { event });
    return event;
  } catch (error) {
    logger.error("updateEvent: Error updating event", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error("Error updating event");
  }
};

const deleteEvent = async id => {
  logger.info("deleteEvent: Start", { id });

  try {
    await ensureCalendarInitialized(); // Ensure the calendar client is ready

    const event = await getEventById(id);

    await calendar.events.delete({
      calendarId: "primary",
      eventId: event.googleCalendarEventId,
      sendUpdates: "all",
    });

    await event.destroy();

    logger.info("deleteEvent: Event deleted", { event });
    return event;
  } catch (error) {
    logger.error("deleteEvent: Error deleting event", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error("Error deleting event");
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
