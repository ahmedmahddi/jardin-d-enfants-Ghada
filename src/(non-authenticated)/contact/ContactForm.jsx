import React, { useState } from "react";
import PropTypes from "prop-types";
import { createContact } from "../api/ContactUs.api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactInputBox = props => {
  const { type, placeholder, name, id, value, onChange, hasError } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } ${
            isFocused ? "border-blue-500" : ""
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        />
      </div>
    </div>
  );
};

ContactInputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const ContactTextArea = props => {
  const { row, placeholder, name, id, value, onChange, hasError } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full resize-none rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } ${
            isFocused ? "border-blue-500" : ""
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        />
      </div>
    </div>
  );
};

ContactTextArea.propTypes = {
  row: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const ContactSelectBox = props => {
  const { name, id, value, onChange, hasError } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className={`mb-6 ${hasError ? "shake border-red-500" : ""}`}>
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full rounded border ${
            hasError ? "border-red-500 bg-red-100" : "border-stroke"
          } ${
            isFocused ? "border-blue-500" : ""
          } px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6`}
        >
          <option value="" disabled>
            Sélectionner le sujet
          </option>
          <option value="Recéption de plus de détails">
            Recéption de plus de détails
          </option>
          <option value="Demande de rendez-vous pour visiter la garderie">
            Demande de rendez-vous pour visiter le jardin d'enfants
          </option>
        </select>
      </div>
    </div>
  );
};

ContactSelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateFormData = formData => {
    const errors = {};

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        errors[key] = `${key} is required`;
        console.log(`Validation error: ${key} is required`);
      }
    });

    return errors;
  };

  const clearFormData = () => ({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();

    console.log("Validating form data...");
    const newErrors = validateFormData(formData);

    if (Object.keys(newErrors).length > 0) {
      console.log("Form validation failed with errors:", newErrors);
      setErrors(newErrors);
      return;
    }

    try {
      console.log("Form data is valid. Sending form data:", formData);

      const response = await createContact(formData);

      console.log("Server response:", response);

      if (response.status === 201) {
        console.log("Email sent successfully.");
        alert("Email envoyé avec succès!");
        setFormData(clearFormData());
      } else {
        console.log("Unexpected server response status:", response.status);
        alert("Une erreur s'est produite.");
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      alert("Une erreur s'est produite.");
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-yellow-50 to-pink-50 py-16 min-h-screen w-screen"
      id="contact"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-orange">
            Contactez Nous
          </h2>
          <p className="text-xl text-dark-blue">
            En cas de question ou demande, n'hésitez pas à nous contacter.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="mb-12 lg:mb-0 lg:mr-8 flex-1">
            <p className="text-lg text-dark-blue leading-relaxed mb-6">
              Nous sommes ici pour répondre à toutes vos questions et pour aider
              votre enfant à réussir.
              <br />
              <p className="text-center">
                Veuillez remplir le formulaire, et nous vous répondrons dans les
                plus brefs délais.
              </p>
            </p>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-red-600 transform transition-transform duration-300 hover:scale-110 active:scale-90">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Adresse
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/LZh5HrSdJKnVR1ae7"
                    className="text-gray-600 dark:text-slate-400"
                  >
                    138 Av. Errached Sakiet Eddaier, Sfax, Tunisie
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-red-600 transform transition-transform duration-300 hover:scale-110 active:scale-90">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +216 99 890 625
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Email: tailnext@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 text-white flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-red-600 transform transition-transform duration-300 hover:scale-110 active:scale-90">
                  <FontAwesomeIcon icon={faClock} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-dark-blue">
                    Heures d'ouverture
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Lundi - Vendredi: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Samedi: 08:00 - 14:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="card p-5 md:p-8 flex-1 bg-white bg-opacity-50 rounded shadow-lg max-w-xl">
            <h2 className="text-2xl font-bold text-blue mb-4 text-center">
              Remplissez le formulaire
            </h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <ContactInputBox
                type="text"
                placeholder="Votre nom"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                hasError={errors.name}
              />
              <ContactInputBox
                type="email"
                placeholder="Votre adresse email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                hasError={errors.email}
              />
              <ContactInputBox
                type="text"
                placeholder="Votre numéro de téléphone"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                hasError={errors.phone}
              />
              <ContactSelectBox
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                hasError={errors.subject}
              />
              <ContactTextArea
                row="5"
                placeholder="Écrivez votre message..."
                name="message"
                id="textarea"
                value={formData.message}
                onChange={handleChange}
                hasError={errors.message}
              />
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue text-white px-6 py-3 text-lg rounded-md sm:mb-0 transition-transform transform hover:scale-105"
                >
                  Envoyer le Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
