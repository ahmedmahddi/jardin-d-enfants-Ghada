import { Employee } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveEmployee = async data => {
  try {
    const employee = await Employee.create(data);
    return employee;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const updateEmployee = async (id, data) => {
  try {
    const [affectedRows, [updatedEmployee]] = await Employee.update(data, {
      where: { empID: id },
      returning: true,
    });
    if (affectedRows === 0) {
      throw new AppError("Data Not Found", 404);
    }
    return updatedEmployee;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteEmployee = async id => {
  try {
    const affectedRows = await Employee.destroy({ where: { empID: id } });
    if (affectedRows === 0) {
      throw new AppError("Data Not Found", 404);
    }
    return affectedRows;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getEmployee = async id => {
  try {
    const employee = await Employee.findOne({ where: { empID: id } });
    if (!employee) {
      throw new AppError("Data Not Found", 404);
    }
    return employee;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};

export const getAllEmployees = async () => {
  try {
    const employees = await Employee.findAll();
    return employees;
  } catch (err) {
    throw new AppError("Internal server error.", 500);
  }
};
