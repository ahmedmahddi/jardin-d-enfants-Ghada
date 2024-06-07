import { Schedule } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveSchedule = async data => {
  try {
    const schedule = await Schedule.create(data);
    return schedule;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateSchedule = async (id, data) => {
  try {
    const [updatedRows, [schedule]] = await Schedule.update(data, {
      where: { id },
      returning: true,
    });
    if (!updatedRows) {
      throw new AppError("Schedule Not Found", 404);
    }
    return schedule;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateStaffSchedule = async (id, staffID) => {
  try {
    const [updatedRows, [schedule]] = await Schedule.update(
      { staffID },
      { where: { id }, returning: true }
    );
    if (!updatedRows) {
      throw new AppError("Schedule Not Found", 404);
    }
    return schedule;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteSchedule = async id => {
  try {
    const schedule = await Schedule.destroy({ where: { id } });
    if (!schedule) {
      throw new AppError("Schedule Not Found", 404);
    }
    return schedule;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getSchedules = async id => {
  try {
    const schedule = await Schedule.findAll({ where: { childID: id } });
    return schedule;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getScheduleForStaff = async id => {
  try {
    const schedules = await Schedule.findAll({ where: { staffID: id } });
    return schedules;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};
