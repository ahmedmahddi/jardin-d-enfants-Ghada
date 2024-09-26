const express = require("express");
const getOAuth2Client = require("../utils/auth.js");
const logger = require("../middleware/wlogger.middleware.js");
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");

const tokenrouter = express.Router();

const TOKEN_PATH = path.join(__dirname, "../", "token.json");

// Google OAuth2 callback route
tokenrouter.get("/google/callback", async (req, res) => {
  const code = req.query.code; // Authorization code from Google

  if (!code) {
    return res.status(400).send("No authorization code provided.");
  }

  try {
    // Initialize OAuth2 client
    const oAuth2Client = await getOAuth2Client();

    // Exchange the code for tokens
    const { tokens } = await oAuth2Client.getToken({
      code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI, // Ensure redirect URI matches
    });

    // Set the credentials
    oAuth2Client.setCredentials(tokens);

    // Store the token to disk for later program executions
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    logger.info("Tokens stored to token.json");

    // Redirect to your frontend or send a success message
    res.send("Authentication successful! Tokens have been stored.");
  } catch (error) {
    logger.error("Error during token exchange", { error });
    res.status(500).send(`Error during token exchange: ${error.message}`);
  }
});

module.exports = tokenrouter;
