import { google } from "googleapis";
import nodemailer from "nodemailer";
import fs from "fs";
import path, { dirname } from "path";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const refreshAccessToken = async () => {
  try {
    const newTokens = await oAuth2Client.refreshAccessToken();
    oAuth2Client.setCredentials(newTokens.credentials);
    console.log("Access token refreshed");
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Failed to refresh access token");
  }
};

const uploadToDrive = async (filePath, fileName) => {
  try {
    const drive = google.drive({ version: "v3", auth: oAuth2Client });
    const fileMetadata = {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    };
    const media = {
      mimeType: "application/pdf",
      body: fs.createReadStream(filePath),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, webViewLink, webContentLink",
    });
    console.log("File uploaded to Google Drive:", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.error === "invalid_grant") {
      console.log("Invalid grant error, attempting to refresh token...");
      await refreshAccessToken();
      return uploadToDrive(filePath, fileName); // Retry upload after refreshing token
    } else {
      console.error("Error uploading to Google Drive:", error);
      throw new Error("Failed to upload file to Google Drive");
    }
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password for Gmail
  },
});

const sendEmail = async options => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    html: options.html,
    attachments: options.attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

const getEmailTemplate = (templateName, replacements) => {
  const filePath = path.join(__dirname, `../templates/${templateName}.html`);
  let template;

  try {
    template = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading email template:", error);
    throw new Error("Failed to read email template");
  }

  if (!Array.isArray(replacements.children)) {
    replacements.children = [];
  }

  const childrenHtml = replacements.children
    .map(
      child => `
    <tr>
      <td>
        <strong>Parent: ${replacements.parentName}</strong><br />Enfant:
        ${child.childName}
      </td>
      <td>$${child.amount}</td>
    </tr>
  `
    )
    .join("");

  template = template.replace("${children}", childrenHtml);

  for (const key in replacements) {
    template = template.replace(
      new RegExp(`\\$\\{${key}\\}`, "g"),
      replacements[key]
    );
  }

  return template;
};

const generatePdf = async (htmlContent, outputPath) => {
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  await page.pdf({ path: outputPath, format: "A4", printBackground: true });
  await browser.close();
};

export { sendEmail, getEmailTemplate, generatePdf, uploadToDrive };
