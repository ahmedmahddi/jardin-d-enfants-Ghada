// ExtracurricularActivities.jsx
import React from "react";

const ExtracurricularActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Music and Dance",
      description:
        "Children can explore their creativity through music and dance classes led by experienced instructors.",
    },
    {
      id: 2,
      title: "Sports and Fitness",
      description:
        "We offer various sports and fitness activities to promote physical development and healthy habits.",
    },
    {
      id: 3,
      title: "Art and Crafts",
      description:
        "Children can unleash their artistic talents through our art and crafts workshops.",
    },
    // Add more activities here
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Extracurricular Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map(activity => (
          <div key={activity.id} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {activity.title}
            </h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
