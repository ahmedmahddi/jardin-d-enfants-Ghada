const { User } = require("../models/index.js");
const bcrypt = require("bcryptjs");

const createUser = async userData => {
  // Hash the password before saving the user
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  userData.password = hashedPassword;

  const user = await User.create(userData);
  return user;
};

const getUserById = async userId => {
  const user = await User.findByPk(userId);
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const updateUser = async (userId, updateData) => {
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

const deleteUser = async userId => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.destroy();
  return user;
};

const getUserByEmail = async email => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
};
