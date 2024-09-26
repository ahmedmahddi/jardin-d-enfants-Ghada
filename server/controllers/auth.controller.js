const {
  loginUser,
  sendPasswordResetEmail,
  resetPassword,
} = require("../services/auth.service.js");

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const { user, token } = await loginUser(email, password, role);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const result = await sendPasswordResetEmail(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPasswordHandler = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await resetPassword(token, newPassword);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  requestPasswordReset,
  resetPasswordHandler,
};
