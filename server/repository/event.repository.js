import { Event } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveEvent = async data => {
  try {
    const eventData = await Event.create(data);
    return eventData;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateEventData = async (id, data) => {
  try {
    const eventData = await Event.update(data, {
      where: { id },
      returning: true,
    });
    if (!eventData[1].length) {
      throw new AppError("Data Not Found", 404);
    }
    return eventData[1][0];
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteEvent = async id => {
  try {
    const eventData = await Event.destroy({ where: { id } });
    if (!eventData) {
      throw new AppError("Data Not Found", 404);
    }
    return eventData;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getEventByID = async id => {
  try {
    const event = await Event.findOne({ where: { id } });
    return event;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getAllEvents = async () => {
  try {
    const events = await Event.findAll();
    return events;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};
