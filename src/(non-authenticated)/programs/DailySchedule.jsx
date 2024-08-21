import React from "react";

const DailySchedule = () => {
  const schedule = [
    { time: "08:00 - 09:00", activity: "Accueil et jeux libres" },
    { time: "09:00 - 10:00", activity: "Activités éducatives" },
    { time: "10:00 - 10:30", activity: "Récréation et collation" },
    { time: "10:30 - 12:00", activity: "Ateliers créatifs" },
    { time: "12:00 - 13:00", activity: "Déjeuner" },
    { time: "13:00 - 14:30", activity: "Sieste" },
    { time: "14:30 - 16:00", activity: "Jeux extérieurs" },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-pink-50 py-12 rounded-lg shadow-lg w-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange">
        Horaire Quotidien
      </h2>
      <div className="max-w-xl mx-auto">
        {schedule.map(item => (
          <div
            key={item.time}
            className="flex justify-between bg-transparent p-4 my-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <span className="font-semibold text-dark-blue">{item.time}</span>
            <span className="text-dark-blue">{item.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailySchedule;
