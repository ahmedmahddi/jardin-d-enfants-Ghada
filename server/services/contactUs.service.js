import ContactUs from "../models/contactUs.model.js";
import nodemailer from "nodemailer";
import logger from "../middleware/wlogger.middleware.js";
import dotenv from "dotenv";
dotenv.config();

export const createContact = async contactData => {
  try {
    const contact = await ContactUs.create(contactData);
    logger.info(`Contact created with id: ${contact.id}`);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailtoDayCare = {
      from: process.env.EMAIL_USER, // Ensure the email is sent from the daycare email
      to: process.env.EMAIL_USER, // Send to the daycare email
      subject: `Nouveau message de contact de la part de ${contactData.name} concernant ${contactData.subject}`,
      text: `
        Vous avez reçu un nouveau message de contact.
        
        Nom: ${contactData.name}
        Email: ${contactData.email}
        Téléphone: ${contactData.phonenumber}
        Sujet: ${contactData.subject}
        Message: ${contactData.message}
        
        Cordialement,
        Votre équipe de garderie
      `,
    };

    const mailtosender = {
      from: process.env.EMAIL_USER, // Ensure the confirmation email is sent from the daycare email
      to: contactData.email, // Send to the contact's email
      subject: `Votre message a été envoyé avec succès`,
      text: `
        Bonjour ${contactData.name},

        Nous avons bien reçu votre message et nous vous en remercions. Nous reviendrons vers vous dans les plus brefs délais pour répondre à votre demande.

        Bien cordialement,
        L'équipe de la garderie
      `,
    };

    await transporter.sendMail(mailtoDayCare);
    logger.info(`Email sent to daycare for contact id: ${contact.id}`);

    await transporter.sendMail(mailtosender);
    logger.info(
      `Confirmation email sent to sender for contact id: ${contact.id}`
    );

    return contact;
  } catch (error) {
    logger.error("Error creating contact message:", error);
    throw new Error(
      "Erreur lors de la création du message de contact: " + error.message
    );
  }
};
