const contactService = require("../services/contactUs.service.js");
const logger = require("../middleware/wlogger.middleware.js");

const createContactController = async (req, res) => {
  try {
    const contactData = req.body;
    logger.info("Received contact creation request", { contactData });

    const newContact = await contactService.createContact(contactData);
    logger.info("Contact created successfully", { newContact });

    res
      .status(201)
      .json({ message: "Message envoyé avec succès!", contact: newContact });
  } catch (error) {
    logger.error("Error creating contact:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création du message de contact" });
  }
};

module.exports = {
  createContactController,
};
