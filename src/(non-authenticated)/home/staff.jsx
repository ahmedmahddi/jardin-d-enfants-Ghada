import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/images/logo-JDG-with-background copy no name1.png";

const teamMembers = [
  {
    id: 1,

    name: "Serra Damak",
    role: "Directrice de la Jardin d'enfants",
    image: `${img}`,
  },
  {
    id: 2,

    name: "Jese Leos",
    role: "Éducatrice de la petite enfance",
    image: `${img}`,
  },
  {
    id: 3,

    name: "Joseph Mcfall",
    role: "Éducatrice de la petite enfance",
    image: `${img}`,
  },
  {
    id: 4,

    name: "Michael Gough",
    role: "Éducatrice de la petite enfance",
    image: `${img}`,
  },
  {
    id: 5,

    name: "Michael Gough",
    role: "Responsable de la nutrition",
    image: `${img}`,
  },
  {
    id: 6,

    name: "Michael Gough",
    role: "Infirmier / Infirmière",
    image: `${img}`,
  },
  {
    id: 7,

    name: "Michael Gough",
    role: "Animateur / Animatrice",
    image: `${img}`,
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-screen bg-gray-100 text-dark-blue py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark-blue">
            Notre Équipe
          </h2>
        </div>
        <Slider {...settings}>
          {teamMembers.map(member => (
            <div
              key={member.id}
              className="block group md:col-span-2 lg:col-span-1"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-blue"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-blue">
                {member.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                {member.role}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
