import bcrypt from "bcrypt";
import {
  saveUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const save = async data => {
  let {
    firstName,
    lastName,
    email,
    userName,
    password,
    mobile,
    address,
    role,
  } = data;
  const userNameObj = { userName };
  try {
    const exUser = await getUser(userNameObj); // Check by userName, not id
    if (exUser) {
      throw new AppError("User already exists.", 400);
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    password = hash;

    await saveUser({
      firstName,
      lastName,
      email,
      userName,
      password,
      mobile,
      address,
      role,
    });
    return "Successfully registered.";
  } catch (err) {
    console.error("Error in save function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const login = async data => {
  const { userName, password } = data;
  try {
    const user = await loginUser(userName);
    if (!user) {
      throw new AppError("User does not exist.", 404);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AppError("Password is incorrect.", 400);
    }
    return user;
  } catch (err) {
    console.error("Error in login function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const getOne = async userId => {
  try {
    const user = await getUser({ id: userId }); // Ensure proper format
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return user;
  } catch (err) {
    console.error("Error in getOne function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const getAll = async () => {
  try {
    const users = await getAllUsers();
    return users;
  } catch (err) {
    console.error("Error in getAll function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const view = async user => {
  try {
    return {
      _id: user?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      userName: user?.userName,
      email: user?.email,
      role: user?.role,
      mobile: user?.mobile,
      address: user?.address,
      url: user?.url,
    };
  } catch (err) {
    console.error("Error in view function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const update = async (userId, data) => {
  try {
    const user = await updateUser(userId, data);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return user;
  } catch (err) {
    console.error("Error in update function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};

export const remove = async userId => {
  try {
    const result = await deleteUser(userId);
    if (!result) {
      throw new AppError("User not found", 404);
    }
    return userId;
  } catch (err) {
    console.error("Error in remove function:", err);
    throw new AppError(err.message, err.status || 500);
  }
};
