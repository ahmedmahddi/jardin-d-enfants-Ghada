import {
  save,
  login,
  getOne,
  getAll,
  update,
  remove,
  view,
} from "../services/index.js";
import Success from "../utils/success.js";
import AppError from "../utils/appError.js";

export const saveUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      userName,
      password,
      mobile,
      address,
      role,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !userName ||
      !password ||
      !mobile ||
      !address
    ) {
      throw new AppError("All fields are required.", 400);
    }
    const message = await save({
      firstName,
      lastName,
      email,
      userName,
      password,
      mobile,
      address,
      role,
    });
    res.status(201).json({
      status: "success",
      message,
    });
  } catch (err) {
    console.error("Error in saveUser controller:", err);
    next(new AppError(err.message, err.status || 500));
  }
};

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await login({ userName, password });
    res.json(Success(user, "Successfully logged in."));
  } catch (err) {
    console.error("Error in loginUser controller:", err);
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getOne(req.params.id);
    res.json(Success(user, "Get user by id success."));
  } catch (err) {
    console.error("Error in getUser controller:", err); // Enhanced logging
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.json(Success(users, "Get all users success."));
  } catch (err) {
    console.error("Error in getAllUsers controller:", err); // Enhanced logging
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const viewProfile = async (req, res) => {
  try {
    const user = await view(req.user);
    res.json(Success(user, "View profile success."));
  } catch (err) {
    console.error("Error in viewProfile controller:", err); // Enhanced logging
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await update(req.params.id, req.body);
    res.json(Success(user, "Update user by id success."));
  } catch (err) {
    console.error("Error in updateUser controller:", err); // Enhanced logging
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await remove(req.params.id);
    res.json(Success(result, "Delete user by id success."));
  } catch (err) {
    console.error("Error in deleteUser controller:", err); // Enhanced logging
    res.status(err.status || 500).json({ message: err.message });
  }
};
