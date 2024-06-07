import { AssignStaff } from "../models/index.js";
import AppError from "../utils/appError.js";


//Assign staff
export const saveAssignedStaff = async data => {
  try {
    const assignedStaff = await AssignStaff.create(data);
    return assignedStaff;
  } catch (err) {
    throw new AppError(err.message || "Failed to assign staff", 500);
  }
};

// Update assigned staff data
export const updateAssignedStaffData = async (id, data) => {
  try {
    const assignedStaff = await AssignStaff.findByPk(id);
    if (!assignedStaff) {
      throw new AppError("Assigned staff not found", 404);
    }
    await assignedStaff.update(data);
    return assignedStaff;
  } catch (err) {
    throw new AppError(
      err.message || "Failed to update assigned staff data",
      500
    );
  }
};

// Delete assigned staff
export const deleteAssignedStaff = async id => {
  try {
    const assignedStaff = await AssignStaff.findByPk(id);
    if (!assignedStaff) {
      throw new AppError("Assigned staff not found", 404);
    }
    await assignedStaff.destroy();
    return assignedStaff;
  } catch (err) {
    throw new AppError(err.message || "Failed to delete assigned staff", 500);
  }
};

// Get all assigned staff
export const getAllAssignedStaff = async () => {
  try {
    const assignedStaffs = await AssignStaff.findAll();
    return assignedStaffs;
  } catch (err) {
    throw new AppError(
      err.message || "Failed to fetch assigned staff details",
      500
    );
  }
};

// Get pending assigned staff
export const getPendingAssignedStaff = async () => {
  try {
    const pendingAssignedStaffs = await AssignStaff.findAll({
      where: { status: "pending" },
    });
    return pendingAssignedStaffs;
  } catch (err) {
    throw new AppError(
      err.message || "Failed to fetch pending assigned staff details",
      500
    );
  }
};

// Get assigned kids for staff
export const getAssignedKidsForStaff = async staffID => {
  try {
    const assignedKids = await AssignStaff.findAll({ where: { staffID } });
    return assignedKids;
  } catch (err) {
    throw new AppError(
      err.message || "Failed to fetch assigned kids details",
      500
    );
  }
};
