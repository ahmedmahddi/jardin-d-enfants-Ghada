// ProgramDetails.jsx
import React from "react";

const ProgramDetails = () => {
  const programs = [
    {
      id: 1,
      title: "Infant Program",
      description:
        "Our infant program provides a safe and nurturing environment for babies aged 6 weeks to 12 months. Our experienced caregivers attend to the individual needs of each child, offering plenty of cuddles, playtime, and age-appropriate activities.",
      curriculum: [
        "Sensory exploration",
        "Tummy time",
        "Music and movement",
        "Language development",
      ],
    },
    {
      id: 2,
      title: "Toddler Program",
      description:
        "Our toddler program is designed for children aged 12 months to 3 years. We focus on developing social skills, language, and independence through play-based learning and structured activities.",
      curriculum: [
        "Imaginative play",
        "Art and crafts",
        "Storytime",
        "Outdoor exploration",
      ],
    },
    // Add more programs here
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Programs</h2>
      {programs.map(program => (
        <div key={program.id} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {program.title}
          </h3>
          <p className="text-gray-600 mb-4">{program.description}</p>
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            Curriculum Highlights:
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {program.curriculum.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProgramDetails;
