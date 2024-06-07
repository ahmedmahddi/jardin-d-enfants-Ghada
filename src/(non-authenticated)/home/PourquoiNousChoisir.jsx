import React from "react";

const PourquoiNousChoisir = () => {
  const allServices = [
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
    {
      id: 6,

      title: "Implication des Parents",
      description:
        "Participation des parents dans divers ateliers et activités enrichissantes.",
      icon: "🤝",
    },
    {
      id: 7,

      title: "Programme Spécial",
      description:
        "Événements spéciaux et programmes adaptés aux besoins particuliers.",
      icon: "🎉",
    },
    {
      id: 8,

      title: "Temps de Repos",
      description: "Temps de repos et de sieste pour un développement sain.",
      icon: "🛏️",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 h-screen w-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-orange-600">
          Pourquoi Nous Choisir
        </h2>
        <p className="text-center mb-12 text-dark-blue">
          Découvrez pourquoi le Jardin d'Enfant Ghada est le meilleur choix pour
          votre enfant.
        </p>
        <div className="text-dark-blue grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map(service => (
            <div
              key={service.id}
              className="bg-yellow-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-dark-blue text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourquoiNousChoisir;
