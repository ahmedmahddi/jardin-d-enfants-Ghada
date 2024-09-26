const { Children, User, Invoice } = require("../models/index.js");
const { sendEmail } = require("../utils/email.js");
const bcrypt = require("bcryptjs");

const logError = (functionName, error) => {
  console.error(`Error in ${functionName}:`, error.message);
};

const logSuccess = (functionName, message) => {
  console.log(`Success in ${functionName}: ${message}`);
};

const createChild = async childData => {
  const functionName = "createChild";
  console.log(`${functionName} - Received child data:`, childData);

  const { parentName, parentEmail, parentPhone, parentWork, ...rest } =
    childData;

  if (!parentEmail) {
    const errorMessage = "Parent email is required";
    logError(functionName, new Error(errorMessage));
    throw new Error(errorMessage);
  }

  const parentData = {
    name: parentName,
    email: parentEmail,
    phone: parentPhone,
    password: await bcrypt.hash("defaultpassword", 10),
    role: "parent",
  };

  try {
    const [parent, created] = await User.findOrCreate({
      where: { email: parentData.email },
      defaults: parentData,
    });

    if (created) {
      const emailContent = `
        Dear ${parent.name},
        Your account has been created. Please use the following credentials to log in:
        Email: ${parent.email}
        Password: defaultpassword (Please change this password after logging in)
      `;
      await sendEmail({
        to: parent.email,
        subject: "Parent Portal Credentials",
        message: emailContent,
      });
      logSuccess(
        functionName,
        `Email sent to new parent user: ${parent.email}`
      );
    }

    const child = await Children.create({
      ...rest,
      parentId: parent.id,
      parentName: parentName,
      parentPhone: parentPhone,
      parentEmail: parentEmail,
      parentWork: parentWork,
    });

    logSuccess(functionName, `Child created with ID: ${child.id}`);
    return child;
  } catch (error) {
    logError(functionName, error);
    throw new Error("Failed to create child. Please check the provided data.");
  }
};

const getChildById = async childId => {
  const functionName = "getChildById";
  try {
    const child = await Children.findByPk(childId);
    if (!child) {
      const errorMessage = "Child not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }
    logSuccess(functionName, `Child retrieved with ID: ${child.id}`);
    return child;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

const getAllChildren = async (page, limit) => {
  const functionName = "getAllChildren";
  try {
    const offset = (page - 1) * limit;
    const { count: totalItems, rows: children } =
      await Children.findAndCountAll({
        offset,
        limit,
      });
    logSuccess(functionName, `Retrieved ${children.length} children`);
    return { children, totalItems, totalPages: Math.ceil(totalItems / limit) };
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

const updateChild = async (childId, updateData) => {
  const functionName = "updateChild";
  console.log(`${functionName} - Received child data for update:`, updateData);
  console.log(`${functionName} - Received child ID:`, childId);

  try {
    const child = await Children.findByPk(childId);
    if (!child) {
      const errorMessage = "Child not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }

    const { parentEmail, parentName, ...childUpdateData } = updateData;

    // Update parent details if they are provided
    if (parentEmail || parentName) {
      const parent = await User.findByPk(child.parentId);
      if (parent) {
        if (parentEmail && parentEmail !== parent.email) {
          parent.email = parentEmail;

          const emailContent = `
            Dear ${parent.name},
            Your email address has been updated to: ${parent.email}.
          `;
          await sendEmail({
            to: parent.email,
            subject: "Parent Email Update",
            message: emailContent,
          });
          logSuccess(
            functionName,
            `Email sent to updated parent user: ${parent.email}`
          );
        }

        if (parentName) {
          parent.name = parentName;
        }
        await parent.save();
      }
    }

    await child.update({ ...childUpdateData, parentEmail, parentName });
    logSuccess(functionName, `Child updated with ID: ${child.id}`);
    return child;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

const deleteChild = async childId => {
  const functionName = "deleteChild";
  console.log(`${functionName} - Received child ID:`, childId); // Additional logging
  try {
    const child = await Children.findByPk(childId);
    if (!child) {
      const errorMessage = "Child not found";
      logError(functionName, new Error(errorMessage));
      throw new Error(errorMessage);
    }

    // Delete related records in Invoices table
    await Invoice.destroy({ where: { childId } });

    await child.destroy();
    logSuccess(functionName, `Child deleted with ID: ${child.id}`);
    return child;
  } catch (error) {
    logError(functionName, error);
    throw error;
  }
};

module.exports = {
  createChild,
  getChildById,
  getAllChildren,
  updateChild,
  deleteChild,
};
