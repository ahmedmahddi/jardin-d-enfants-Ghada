import React from "react";

const WelcomeSection = () => {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-lg shadow-lg w-screen">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-orange">
        Chez Jardin d'Enfants Ghada
      </h1>
      <p className="text-xl text-gray-700">
        les enfants apprennent et s'amusent chaque jour dans un endroit magique.
      </p>
    </section>
  );
};

export default WelcomeSection;
