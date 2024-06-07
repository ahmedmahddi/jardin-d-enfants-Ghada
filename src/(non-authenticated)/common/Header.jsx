import React, { useState } from "react";
import logo from "../assets/images/logo-JDG.png";
import "../../styles/tailwind.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-lightPeach shadow-md font-bubblegum-sans w-screen">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-16 w-24" alt="JDG Logo" />
          <span className="ml-3 text-xl font-bold text-orange">
            Jardin d'enfants Ghada
          </span>
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-dark-blue hover:text-orange font-medium">
            Accueil
          </a>
          <a
            href="/pourquoi-nous-choisir"
            className="text-dark-blue hover:text-orange font-medium"
          >
            Pourquoi nous choisir ?
          </a>
          <a
            href="/Programs"
            className="text-dark-blue hover:text-orange font-medium"
          >
            Programme
          </a>
          <a
            href="/about"
            className="text-dark-blue hover:text-orange font-medium"
          >
            Découvrez Nous
          </a>
          <a
            href="/contact"
            className="text-dark-blue hover:text-orange font-medium"
          >
            Contactez Nous
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className="bg-orange text-white py-2 px-4 rounded hover:bg-orange-dark font-medium"
          >
            Se Connecter
          </a>
          <a
            href="/enrollment"
            className="bg-orange text-white py-2 px-4 rounded hover:bg-orange-dark font-medium"
          >
            Inscription
          </a>
        </div>
        <button
          onClick={handleMenuToggle}
          className="lg:hidden text-gray-dark hover:text-orange focus:outline-none"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-lightPeach shadow-md text-center">
          <div className="container mx-auto px-6 py-4">
            <a href="/" className="block text-dark-blue hover:text-orange py-2">
              Accueil
            </a>
            <a
              href="/pourquoi-nous-choisir"
              className="block text-dark-blue hover:text-orange py-2"
            >
              Pourquoi nous choisir ?
            </a>
            <a
              href="/Programs"
              className="block text-dark-blue hover:text-orange py-2"
            >
              Programme
            </a>
            <a
              href="/about"
              className="block text-dark-blue hover:text-orange py-2"
            >
              Découvrez Nous
            </a>
            <a
              href="/contact"
              className="block text-dark-blue hover:text-orange py-2"
            >
              Contactez Nous
            </a>
            <a
              href="/login"
              className="block bg-orange text-white py-2 px-4 rounded text-center mt-2"
            >
              Se Connecter
            </a>
            <a
              href="/enrollment"
              className="block bg-orange text-white py-2 px-4 rounded text-center mt-2"
            >
              Inscription
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
