
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");


dotenv.config();

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


module.exports = { sendEmail, getEmailTemplate };
