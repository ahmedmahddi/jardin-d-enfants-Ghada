// user.repository.js
import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = async data => {
  try {
    const user = await User.create(data);
    return user;
  } catch (err) {
    console.error("Error in saveUser:", err);
    throw new AppError("Internal server error.", 500);
  }
};

export const loginUser = async userName => {
  try {
    const user = await User.findOne({ where: { userName } });
    return user;
  } catch (err) {
    console.error("Error in loginUser:", err);
    throw new AppError("Internal server error.", 500);
  }
};

export const getUser = async criteria => {
  try {
    const user = await User.findOne({ where: criteria });
    return user;
  } catch (err) {
    console.error("Error in getUser:", err);
    throw new AppError("Internal server error.", 500);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    return users;
  } catch (err) {
    console.error("Error in getAllUsers:", err);
    throw new AppError("Internal server error.", 500);
  }
};

export const updateUser = async (userId, data) => {
  try {
    const [affectedCount, [user]] = await User.update(data, {
      where: { id: userId },
      returning: true,
    });
    if (affectedCount === 0) {
      throw new AppError("User not found.", 404);
    }
    return user;
  } catch (err) {
    console.error("Error in updateUser:", err);
    throw new AppError("Internal server error.", 500);
  }
};

export const deleteUser = async userId => {
  try {
    const result = await User.destroy({ where: { id: userId } });
    if (result === 0) {
      throw new AppError("User not found.", 404);
    }
    return userId;
  } catch (err) {
    console.error("Error in deleteUser:", err);
    throw new AppError("Internal server error.", 500);
  }
};
