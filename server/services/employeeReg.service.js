import {
  saveEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployees,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveEmployeeService = async data => {
  try {
    return await saveEmployee(data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateEmployeeService = async (id, data) => {
  try {
    return await updateEmployee(id, data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteEmployeeService = async id => {
  try {
    return await deleteEmployee(id);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getEmployeeService = async id => {
  try {
    return await getEmployee(id);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllEmployeeService = async () => {
  try {
    return await getAllEmployees();
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
