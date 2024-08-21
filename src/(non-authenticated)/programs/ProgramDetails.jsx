import React from "react";

const ProgramDetails = () => {
  const programs = [
    {
      title: "Programme Maternelle",
      description: "Activités pour développer les compétences de base.",
    },
    {
      title: "Programme Préscolaire",
      description: "Préparation à l’entrée à l’école primaire.",
    },
    {
      title: "Programme Ludique",
      description: "Jeux et activités pour l’épanouissement.",
    },
  ];

  return (
    <section className="w-screen py-12 rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange">
        Nos Programmes
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {programs.map(program => (
          <div
            key={program.title}
            className="bg-pink-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-dark-blue text-center">
              {program.title}
            </h3>
            <p className="text-dark-blue text-center">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramDetails;
