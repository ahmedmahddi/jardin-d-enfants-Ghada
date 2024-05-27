import React from "react";

const services = [
  {
    id: 1,
    title: "Garde à Temps Plein",
    description:
      "Une routine structurée avec des activités d'apprentissage, de jeu, de repos et de repas.",
    icon: "👶",
  },
  {
    id: 2,
    title: "Programmes Éducatifs",
    description:
      "Activités de littératie, mathématiques, exploration scientifique et arts créatifs.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Développement Social et Émotionnel",
    description:
      "Jeux de groupe, gestion des émotions et résolution des conflits.",
    icon: "❤️",
  },
  {
    id: 4,
    title: "Développement Physique",
    description:
      "Activités de motricité globale et fine, jeux en plein air et sports.",
    icon: "🏃",
  },
  {
    id: 5,
    title: "Sécurité et Soin",
    description:
      "Environnement sécurisé et propre pour le bien-être des enfants.",
    icon: "🛡️",
  },
];

const Services = () => {
  return (
    <section className="flex justify-center items-center w-screen py-12 px-4 bg-gradient-to-r from-yellow-100 to-pink-50 rounded-lg shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-8 text-dark-blue">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className="p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-500 hover:scale-105 hover:shadow-lg m-2 bg-"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-dark-blue">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/pourquoi-nous-choisir"
            className="text-dark-blue font-semibold hover:underline"
          >
            Voir tous nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
