import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-lightPeach text-darkBlue font-bubblegum-sans w-full py-12 rounded-lg shadow-lg">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {/* Liens Rapides */}
        <div>
          <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="/pourquoi-nous-choisir"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Contactez-nous
              </a>
            </li>
            <li>
              <a
                href="/enrollment"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Inscription en ligne
              </a>
            </li>
          </ul>
        </div>

        {/* Informations Légales */}
        <div>
          <h4 className="font-bold text-lg mb-4">Informations Légales</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/terms"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Conditions Générales
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Politique de Confidentialité
              </a>
            </li>
            <li>
              <a
                href="/licensing"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                Licences
              </a>
            </li>
          </ul>
        </div>

        {/* Informations de Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Informations de Contact</h4>
          <div className="space-y-4">
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-orange w-5 h-5"
              />
              <a
                href="https://maps.app.goo.gl/hAjQ2CBaFuwyE7BQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors duration-200 ease-in-out"
              >
                138 Av. Errached Sakiet Eddaier - SFAX
              </a>
            </div>
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-orange w-5 h-5"
              />
              <p className="hover:text-orange transition-colors duration-200 ease-in-out">
                jardindenfantghada@gmail.com
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-orange w-5 h-5" />
              <p className="hover:text-orange transition-colors duration-200 ease-in-out">
                +216 54 890 621 / +216 99 890 625
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="jardin d'enfants ghada emplacement"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.1811386867757!2d10.7810806!3d34.801384399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d214cdc68231%3A0x77c5a562a3880ffc!2s138%20Av.%20Errached%2C%20Sakiet%20Ezzit!5e0!3m2!1sen!2stn!4v1723462184369!5m2!1sen!2stn"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Séparateur Horizontal */}
      <hr className="my-4 border-t border-gray-500" />

      {/* Barre Inférieure : Icônes des Réseaux Sociaux */}
      <div className="container mx-auto flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=61566166073454"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-transform duration-200 ease-in-out transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        </a>
      </div>

      {/* Bas du Pied de Page : Droits d'Auteur */}
      <div className="container mx-auto mt-2 text-center text-darkBlue text-md">
        <p className="flex justify-center items-center">
          Copyright{" "}
          <FontAwesomeIcon
            icon={faCopyright}
            className="mr-1 ml-1 text-orange"
          />
          2024. Tous droits réservés-{" "}
          <a
            href="https://www.linkedin.com/in/ahmed-mahdi-62b29614a"
            className="text-orange"
          >
            Ahmed Mahdi.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
