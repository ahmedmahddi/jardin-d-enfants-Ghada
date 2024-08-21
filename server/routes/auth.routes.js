import { Router } from "express";
import {
  login,
  requestPasswordReset,
  resetPasswordHandler,
} from "../controllers/auth.controller.js";

import rateLimit from "express-rate-limit";
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 7, // Limit each IP to 5 login requests per windowMs
  message:
    "Too many login attempts from this IP, please try again after 15 minutes",
});

const authRouter = Router();

authRouter.post("/login", loginLimiter, login);
authRouter.post("/request-password-reset", requestPasswordReset);
authRouter.post("/reset-password", resetPasswordHandler);

export default authRouter;
