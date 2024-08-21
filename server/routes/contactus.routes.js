import express from "express";
import * as contact from "../controllers/contactus.controller.js";

const sanitizeKeys = (req, res, next) => {
  const sanitizedBody = {};

  Object.keys(req.body).forEach(key => {
    sanitizedBody[key.trim()] = req.body[key];
  });

  req.body = sanitizedBody;
  next();
};

const validateContactData = (req, res, next) => {
  const { name, email, phone, subject, message } = req.body;
  console.log("Received data:", req.body);
  const errors = [];

  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!phone) errors.push("Phone number is required.");
  if (!subject) errors.push("Subject is required.");

  if (name && typeof name !== "string") errors.push("Name must be a string.");
  if (email && typeof email !== "string")
    errors.push("Email must be a string.");
  if (phone && typeof phone !== "string")
    errors.push("Phone number must be a string.");
  if (subject && typeof subject !== "string")
    errors.push("Subject must be a string.");
  if (message && typeof message !== "string")
    errors.push("Message must be a string if provided.");

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Trim spaces
  req.body.name = name.trim();
  req.body.email = email.trim();
  req.body.phonenumber = phone.trim();
  req.body.subject = subject.trim();
  req.body.message = message ? message.trim() : "";

  next();
};

const contactusRouter = express.Router();

contactusRouter.post(
  "/",
  sanitizeKeys,
  validateContactData,
  contact.createContactController
);

export default contactusRouter;
