import {
  saveSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedules,
  updateStaffSchedule,
  getScheduleForStaff,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveScheduleService = async data => {
  try {
    const schedule = await saveSchedule(data);
    return schedule;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateScheduleService = async (id, data) => {
  try {
    const schedule = await updateSchedule(id, data);
    return schedule;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteScheduleService = async id => {
  try {
    const schedule = await deleteSchedule(id);
    return schedule;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSchedulesService = async () => {
  try {
    const schedules = await getSchedules();
    return schedules;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateStaffScheduleService = async (id, staffID) => {
  try {
    const schedule = await updateStaffSchedule(id, staffID);
    return schedule;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getScheduleForStaffService = async staffID => {
  try {
    const schedules = await getScheduleForStaff(staffID);
    return schedules;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
