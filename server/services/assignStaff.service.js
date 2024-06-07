import {
  saveAssignedStaff,
  updateAssignedStaffData,
  deleteAssignedStaff,
  getAllAssignedStaff,
  getPendingAssignedStaff,
  getAssignedKidsForStaff,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveAssignedStaffService = async data => {
  try {
    const assignedStaff = await saveAssignedStaff(data);
    return assignedStaff;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateAssignedStaffDataService = async (id, data) => {
  try {
    const assignedStaff = await updateAssignedStaffData(id, data);
    return assignedStaff;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteAssignedStaffService = async id => {
  try {
    const assignedStaff = await deleteAssignedStaff(id);
    return assignedStaff;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllAssignedStaffService = async () => {
  try {
    const assignedStaffs = await getAllAssignedStaff();
    return assignedStaffs;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getPendingAssignedStaffService = async () => {
  try {
    const pendingAssignedStaffs = await getPendingAssignedStaff();
    return pendingAssignedStaffs;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAssignedKidsForStaffService = async staffID => {
  try {
    const assignedKids = await getAssignedKidsForStaff(staffID);
    return assignedKids;
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
