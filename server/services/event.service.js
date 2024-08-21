// File path: src/services/event.service.js

import Event from "../models/event.model.js";
import User from "../models/user.model.js";
import logger from "../middleware/wlogger.middleware.js";
import { google } from "googleapis";
import getOAuth2Client from "../utils/auth.js";
import { sendEmail } from "../utils/email.js";
import cron from "node-cron";

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

initializeCalendar();

const createEvent = async data => {
  logger.info("createEvent: Start", { data });

  if (!data.title || !data.startDate || !data.endDate || !data.description) {
    logger.error("createEvent: Missing fields", data);
    throw new Error("Title, startDate, endDate, and description are required");
  }

  try {
    const users = await User.findAll();
    const attendees = users.map(user => ({ email: user.email }));

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

    const reminderDate = new Date(data.startDate);
    reminderDate.setDate(reminderDate.getDate() - 2);

    const cronPattern = `${reminderDate.getMinutes()} ${reminderDate.getHours()} ${reminderDate.getDate()} ${reminderDate.getMonth() + 1} *`;

    cron.schedule(cronPattern, () => {
      users.forEach(user => {
        sendEmail({
          to: user.email,
          subject: `Reminder: Upcoming Event ${data.title}`,
          html: `Don't forget about the upcoming event: ${data.title} on ${new Date(data.startDate).toLocaleString("en-GB", { timeZone: "Africa/Tunis", hour12: false })}`,
        });
      });
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

export { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
