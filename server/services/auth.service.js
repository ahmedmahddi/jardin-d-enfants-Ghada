const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index.js");
const { sendEmail } = require("../utils/email.js"); // Import a utility to send emails

const loginUser = async (email, password, role) => {
  try {
    const user = await User.findOne({ where: { email, role } });

    if (!user) {
      console.error(`User not found: email=${email}, role=${role}`);
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.error(
        `Invalid credentials for user: email=${email}, role=${role}`
      );
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    return { user: { id: user.id, email: user.email, role: user.role }, token };
  } catch (error) {
    console.error(
      `Login failed for user: email=${email}, role=${role} - ${error.message}`
    );
    throw error;
  }
};

const sendPasswordResetEmail = async email => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.error(`User not found: email=${email}`);
      throw new Error("User not found");
    }

    const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    await sendEmail({
      to: email,
      subject: "Password Reset Request",
      html: `<p>Please click the following link to reset your password:</p><a href="${resetLink}">Reset Password</a>`,
    });

    return { message: "Password reset link sent to your email" };
  } catch (error) {
    console.error(`Failed to send password reset email: ${error.message}`);
    throw error;
  }
};

const resetPassword = async (token, newPassword) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      console.error(`User not found: id=${decoded.id}`);
      throw new Error("User not found");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    return { message: "Password reset successfully" };
  } catch (error) {
    console.error(`Password reset failed: ${error.message}`);
    throw error;
  }
};

module.exports = {
  loginUser,
  sendPasswordResetEmail,
  resetPassword,
};
