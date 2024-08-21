import { User } from "../models/index.js";
import bcrypt from "bcryptjs";

export const createUser = async userData => {
  // Hash the password before saving the user
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  userData.password = hashedPassword;

  const user = await User.create(userData);
  return user;
};

export const getUserById = async userId => {
  const user = await User.findByPk(userId);
  return user;
};

export const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const updateUser = async (userId, updateData) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Hash the password if it is being updated
  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  }

  await user.update(updateData);
  return user;
};

export const deleteUser = async userId => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.destroy();
  return user;
};

export const getUserByEmail = async email => {
  const user = await User.findOne({ where: { email } });
  return user;
};
