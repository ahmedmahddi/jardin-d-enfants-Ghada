import {
  saveEvent,
  updateEventData,
  deleteEvent,
  getAllEvents,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveEventService = async data => {
  try {
    const event = await saveEvent(data);
    return event;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateEventService = async (id, data) => {
  try {
    const event = await updateEventData(id, data);
    return event;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteEventService = async id => {
  try {
    const event = await deleteEvent(id);
    return event;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getEventsService = async () => {
  try {
    const events = await getAllEvents();
    return events;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
