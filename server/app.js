import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { connect } from "./utils/dbConnect.js";
import logger from "./middleware/logger.middleware.js";
import apirouter from "./routes/index.js";
import errorHandler from "./middleware/error.middleware.js";
import "./cron/invoice.cron.js";
import protect from "./middleware/protect.middleware.js";
const app = express();

// Security middleware should come first
app.use(helmet());

// Use CORS with dynamic origin
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production" ? "https://yourdomain.com" : "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Connect to the database
connect();

// Logging middleware
app.use(logger);

// API routes
app.use("/api", apirouter);

// Verify token route
app.get("/api/auth/verify-token", protect, (req, res) => {
  res.status(200).send({ user: req.user });
});

// Error handling middleware
app.use(errorHandler);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
