import express from "express";
import {
  saveEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  getAllEmployeeController,
} from "../controllers/index.js";

const EmployeeRouter = express.Router();

// Route to add a new employee
EmployeeRouter.post("/", saveEmployeeController);

// Route to update an employee by ID
EmployeeRouter.put("/:id", updateEmployeeController);

// Route to delete an employee by ID
EmployeeRouter.delete("/:id", deleteEmployeeController);

// Route to get a single employee by ID
EmployeeRouter.get("/:id", getEmployeeController);

// Route to get all employees
EmployeeRouter.get("/", getAllEmployeeController);

export default EmployeeRouter;
