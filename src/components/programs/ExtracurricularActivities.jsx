import React from "react";

const ExtracurricularActivities = () => {
  const activities = [
    { title: "Danse", description: "Cours de danse pour enfants." },
    { title: "Musique", description: "Initiation aux instruments de musique." },
    {
      title: "Arts Plastiques",
      description: "Ateliers de peinture et de sculpture.",
    },
  ];

  return (
    <section className="py-12 rounded-lg shadow-lg bg-gray-100 w-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-dark-blue">
        Activités Extra-scolaires
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activities.map(activity => (
          <div
            key={activity.title}
            className="bg-yellow-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-dark-blue">
              {activity.title}
            </h3>
            <p className="text-dark-blue">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtracurricularActivities;
