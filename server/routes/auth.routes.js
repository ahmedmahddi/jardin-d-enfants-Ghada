const express = require("express");
const rateLimit = require("express-rate-limit");
const {
  login,
  requestPasswordReset,
  resetPasswordHandler,
} = require("../controllers/auth.controller.js");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 7, // Limit each IP to 7 login requests per windowMs
  message:
    "Too many login attempts from this IP, please try again after 15 minutes",
});

const authRouter = express.Router();

authRouter.post("/login", loginLimiter, login);
authRouter.post("/request-password-reset", requestPasswordReset);
authRouter.post("/reset-password", resetPasswordHandler);

module.exports = authRouter;
