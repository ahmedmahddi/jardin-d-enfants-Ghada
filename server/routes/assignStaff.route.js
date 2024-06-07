import express from "express";
import {
  saveAssignStaffController,
  updateAssignStaffController,
  deleteAssignStaffController,
  getAllAssignedStaffController,
  getPendingAssignedStaffController,
  getAssignedKidsForStaffController,
} from "../controllers/index.js";

const AssignStaffRouter = express.Router();


// Route to assign staff to a child
AssignStaffRouter.post("/", saveAssignStaffController);

// Route to delete an assigned staff by ID
AssignStaffRouter.delete("/:id", deleteAssignStaffController);

// Route to update an assigned staff by ID
AssignStaffRouter.put("/:id", updateAssignStaffController);

// Route to get all assigned staff
AssignStaffRouter.get("/", getAllAssignedStaffController);

// Route to get pending assigned staff
AssignStaffRouter.get("/pending", getPendingAssignedStaffController);

// Route to get all kids assigned to the authenticated staff
AssignStaffRouter.get("/kids", getAssignedKidsForStaffController);

export default AssignStaffRouter;
