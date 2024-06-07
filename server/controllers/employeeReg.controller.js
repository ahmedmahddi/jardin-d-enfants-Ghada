import {
  saveEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
  getEmployeeService,
  getAllEmployeeService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveEmployeeController = async (req, res) => {
  try {
    const employee = await saveEmployeeService(req.body);
    res.json(Success(employee, "Successfully employee added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateEmployeeController = async (req, res) => {
  try {
    const employee = await updateEmployeeService(req.params.id, req.body);
    res.json(Success(employee, "Successfully employee updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteEmployeeController = async (req, res) => {
  try {
    await deleteEmployeeService(req.params.id);
    res.json(Success({}, "Successfully employee deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getEmployeeController = async (req, res) => {
  try {
    const employee = await getEmployeeService(req.params.id);
    res.json(Success(employee, "Successfully fetched single employee."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllEmployeeController = async (req, res) => {
  try {
    const employees = await getAllEmployeeService();
    res.json(Success(employees, "Successfully fetched all employees."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
