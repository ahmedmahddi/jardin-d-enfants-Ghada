import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faBook,
  faHeart,
  faRunning,
  faShieldAlt,
  faHandsHelping,
  faGift,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

const PourquoiNousChoisir = () => {
  const allServices = [
    {
      id: 1,
      title: "Garde à Temps Plein",
      description:
        "Une routine structurée avec des activités d'apprentissage, de jeu, de repos et de repas.",
      icon: faBaby,
      color: "text-yellow-500",
    },
    {
      id: 2,
      title: "Programmes Éducatifs",
      description:
        "Activités de littératie, mathématiques, exploration scientifique et arts créatifs.",
      icon: faBook,
      color: "text-blue-500",
    },
    {
      id: 3,
      title: "Développement Social et Émotionnel",
      description:
        "Jeux de groupe, gestion des émotions et résolution des conflits.",
      icon: faHeart,
      color: "text-red-500",
    },
    {
      id: 4,
      title: "Développement Physique",
      description:
        "Activités de motricité globale et fine, jeux en plein air et sports.",
      icon: faRunning,
      color: "text-green-500",
    },
    {
      id: 5,
      title: "Sécurité et Soin",
      description:
        "Environnement sécurisé et propre pour le bien-être des enfants.",
      icon: faShieldAlt,
      color: "text-purple-500",
    },
    {
      id: 6,
      title: "Implication des Parents",
      description:
        "Participation des parents dans divers ateliers et activités enrichissantes.",
      icon: faHandsHelping,
      color: "text-pink-500",
    },
    {
      id: 7,
      title: "Programme Spécial",
      description:
        "Événements spéciaux et programmes adaptés aux besoins particuliers.",
      icon: faGift,
      color: "text-indigo-500",
    },
    {
      id: 8,
      title: "Temps de Repos",
      description: "Temps de repos et de sieste pour un développement sain.",
      icon: faBed,
      color: "text-blue-800",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-pink-50 py-16 min-h-screen w-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-orange">
          Pourquoi Nous Choisir
        </h2>
        <p className="text-center mb-16 text-dark-blue text-lg">
          Découvrez pourquoi le Jardin d'Enfant Ghada est le meilleur choix pour
          votre enfant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {allServices.map(service => (
            <div
              key={service.id}
              className="bg-white bg-opacity-50 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center backdrop-blur-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
            >
              <div
                className={`${service.color} text-5xl mb-6 transition-transform transform hover:scale-125 hover:rotate-12`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-orange">
                {service.title}
              </h3>
              <p className="text-dark-blue text-center text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16"></div>{" "}
      {/* Spacer to ensure no collision with footer */}
    </section>
  );
};

export default PourquoiNousChoisir;
