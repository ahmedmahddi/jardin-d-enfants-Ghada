const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer"); // Nodemailer for sending emails
const readline = require("readline");

dotenv.config();

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/drive.file",
];
const TOKEN_PATH = path.join(__dirname, "../token.json");
const EXPIRATION_THRESHOLD = 10 * 60 * 1000; // 10 minutes in milliseconds

// Email configuration to send token expiry warnings
const sendExpiryEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password for Gmail
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "mahdiahmed742@gmail.com",
    subject: "Google OAuth Token Expiry Warning",
    text: `Your Google OAuth token is about to expire. Please refresh it soon to avoid any disruptions.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Expiry email sent to mahdiahmed742@gmail.com");
  } catch (error) {
    console.error("Error sending expiry email:", error);
  }
};

// Function to refresh the access token if it's expired
const refreshAccessTokenIfNeeded = async oAuth2Client => {
  const token = oAuth2Client.credentials;

  // Check if the token has expired or will expire within 10 minutes
  if (
    token.expiry_date &&
    token.expiry_date - Date.now() < EXPIRATION_THRESHOLD
  ) {
    try {
      const refreshResponse = await oAuth2Client.refreshAccessToken(); // Refresh token
      oAuth2Client.setCredentials(refreshResponse.credentials);

      // Store the refreshed token in token.json
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(refreshResponse.credentials));
      console.log("Token refreshed and stored.");
    } catch (error) {
      console.error("Error refreshing access token:", error);
      await sendExpiryEmail(); // Send expiry email if refreshing fails
    }
  }
};

// Function to get OAuth2 client and handle token retrieval and storage
const getOAuth2Client = async () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } =
    process.env;

  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  try {
    if (fs.existsSync(TOKEN_PATH)) {
      const tokenContent = fs.readFileSync(TOKEN_PATH, "utf-8");

      if (tokenContent) {
        const token = JSON.parse(tokenContent);
        oAuth2Client.setCredentials(token);

        // Refresh token if it's close to expiration
        await refreshAccessTokenIfNeeded(oAuth2Client);

        return oAuth2Client;
      } else {
        console.log("Token file is empty, prompting for re-authorization.");
        await getNewToken(oAuth2Client);
      }
    } else {
      console.log("No token found, prompting for authorization.");
      await getNewToken(oAuth2Client);
    }
  } catch (err) {
    console.error("Error reading token file or parsing JSON:", err);
    await getNewToken(oAuth2Client); // Prompt user for a new token
  }

  return oAuth2Client;
};

// Function to prompt for new token and store it in token.json
const getNewToken = oAuth2Client => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // ensures consent screen to receive a refresh token
  });

  console.log("Authorize this app by visiting this url:", authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the code from that page here: ", code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return console.error("Error retrieving access token", err);
      }

      // Set credentials from token and save it
      oAuth2Client.setCredentials(token);

      // Store the token to disk for later use
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
      console.log("Token stored to", TOKEN_PATH);
    });
  });
};

module.exports = { getOAuth2Client };
