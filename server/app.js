require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { connect } = require("./utils/dbConnect.js");
const logger = require("./middleware/wlogger.middleware.js");
const apirouter = require("./routes/index.js");
const protect = require("./middleware/protect.middleware.js");
const csrf = require("csurf");
const { getOAuth2Client } = require("./utils/auth.js");
const fs = require("fs");
const path = require("path");

const app = express();

// Security middleware
app.use(helmet());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://jardindenfantghada.com"
      : "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Authorization, Content-Type, CSRF-Token",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Connect to the database
connect();

// Initialize CSRF protection middleware
const csrfProtection = csrf({
  cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production" },
});

// Request logging middleware using winston
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`, {
    method: req.method,
    url: req.url,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  });
  next();
});

// Route to get the CSRF token
app.get("/api/csrf-token", csrfProtection, (req, res, next) => {
  try {
    const csrfToken = req.csrfToken();
    res.json({ csrfToken });
  } catch (err) {
    next(err);
  }
});
const TOKEN_PATH = path.join(__dirname, "token.json");
// Google OAuth route to start the authentication
// Google OAuth route to start the authentication
app.get("/auth/google", async (req, res) => {
  try {
    const oAuth2Client = await getOAuth2Client();
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/calendar",
      ],
      prompt: "consent",
    });
    res.redirect(authUrl); // Redirect the user to the Google auth page
  } catch (error) {
    logger.error("Error during Google OAuth flow", { error });
    res.status(500).send("Error during Google OAuth flow");
  }
});

// Google OAuth callback route to handle the authorization code
app.get("/auth/google/callback", async (req, res) => {
  try {
    const oAuth2Client = await getOAuth2Client();
    const code = req.query.code; // Extract the authorization code

    if (!code) {
      return res.status(400).send("No code provided.");
    }

    // Use the code to get tokens from Google
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Save the token to disk for later use
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));

    res.send("Token has been successfully obtained and saved.");
  } catch (err) {
    logger.error("Error retrieving access token", { err });
    res.status(500).send("Error retrieving access token");
  }
});

// Apply CSRF protection to all API routes after the CSRF token route
app.use("/api", csrfProtection, apirouter);

// Auth route for token verification
app.get("/api/auth/verify-token", protect, (req, res) => {
  res.status(200).send({ user: req.user });
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`, {
    method: req.method,
    url: req.url,
    ip: req.ip,
    timestamp: new Date().toISOString(),
    stack: err.stack,
  });

  if (process.env.NODE_ENV !== "production") {
    return res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }

  res.status(500).json({ message: "Internal Server Error" });
});

// Export the app using CommonJS
module.exports = app;
