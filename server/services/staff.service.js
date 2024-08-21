// services/staff.service.js
import { Staff, User } from "../models/index.js";
import { sendEmail } from "../utils/email.js";
import bcrypt from "bcrypt";
import sequelize from "../config/db.js"; // Import sequelize to manage transactions

const logError = (functionName, error) => {
  console.error(`Error in ${functionName}:`, error.message);
};

const logSuccess = (functionName, message) => {
  console.log(`Success in ${functionName}: ${message}`);
};

export const createStaff = async staffData => {
  const functionName = "createStaff";
  console.log(`${functionName} - Received staff data:`, staffData);

  const { name, email, ...rest } = staffData;

  if (!email) {
    const errorMessage = "Email is required";
    logError(functionName, new Error(errorMessage));
    throw new Error(errorMessage);
  }

  const transaction = await sequelize.transaction(); // Start a transaction

  try {
    // Hash a default password for the new user
    const hashedPassword = await bcrypt.hash("defaultpassword", 10);

    // Create the user record
    const user = await User.create(
      {
        name: name, // Ensure name is also set in User
        email: email,
        password: hashedPassword,
        role: "staff",
      },
      { transaction }
    );
    console.log(user);

    // Create the staff record with the user's ID
    const staff = await Staff.create(
      {
        name: name, // Explicitly pass the name
        email: email,
        ...rest,
      },
      { transaction }
    );

    await transaction.commit(); // Commit the transaction

    // Send the welcome email after the transaction is committed
    const emailContent = `
      Dear ${staff.name},
      Your staff account has been created. Please use the following credentials to log in:
      Email: ${staff.email}
      Password: defaultpassword (Please change this password after logging in)
    `;
    await sendEmail({
      to: staff.email,
      subject: "Staff Portal Credentials",
      message: emailContent,
    });
    logSuccess(functionName, `Email sent to new staff user: ${staff.email}`);

    logSuccess(functionName, `Staff created with ID: ${staff.id}`);
    return staff;
  } catch (error) {
    await transaction.rollback(); // Rollback the transaction in case of error
    logError(functionName, error);
    throw new Error("Failed to create staff. Please check the provided data.");
  }
};

export const getStaffById = async staffId => {
  const functionName = "getStaffById";
  try {
    const staff = await Staff.findByPk(staffId);
    if (!staff) {
      const errorMessage = "Staff not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }
    logSuccess(functionName, `Staff retrieved with ID: ${staff.id}`);
    return staff;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const getAllStaff = async (page, limit) => {
  const functionName = "getAllStaff";
  try {
    if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
      const errorMessage = "Invalid pagination parameters";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }

    const offset = (page - 1) * limit;
    const { rows: staffList, count: totalItems } = await Staff.findAndCountAll({
      offset,
      limit,
    });

    logSuccess(functionName, `Retrieved ${staffList.length} staff members`);
    return { staffList, totalItems, totalPages: Math.ceil(totalItems / limit) };
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const updateStaff = async (staffId, updateData) => {
  const functionName = "updateStaff";
  console.log(`${functionName} - Received staff data for update:`, updateData);
  console.log(`${functionName} - Received staff ID:`, staffId);

  try {
    const staff = await Staff.findByPk(Number(staffId)); // Ensure staffId is a number
    if (!staff) {
      const errorMessage = "Staff not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }

    const { email, ...staffUpdateData } = updateData;

    if (email && email !== staff.email) {
      staff.email = email;
      await staff.save();

      const emailContent = `
        Dear ${staff.name},
        Your email address has been updated to: ${staff.email}.
      `;
      await sendEmail({
        to: staff.email,
        subject: "Staff Email Update",
        message: emailContent,
      });
      logSuccess(
        functionName,
        `Email sent to updated staff user: ${staff.email}`
      );
    }

    await staff.update({ ...staffUpdateData, email });
    logSuccess(functionName, `Staff updated with ID: ${staff.id}`);
    return staff;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

export const deleteStaff = async staffId => {
  const functionName = "deleteStaff";
  console.log(`${functionName} - Received staff ID:`, staffId);
  try {
    const staff = await Staff.findByPk(staffId);
    if (!staff) {
      const errorMessage = "Staff not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }
    await staff.destroy();
    logSuccess(functionName, `Staff deleted with ID: ${staff.id}`);
    return staff;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};
