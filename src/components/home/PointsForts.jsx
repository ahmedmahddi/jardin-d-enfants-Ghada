import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const points = [
  {
    id: 1,
    title: "Programme Éducatif Aisé 📚",
    description:
      "Favorise l'apprentissage interactif et amusant pour un développement global.",
    color: "bg-[#EAF3F2]",
  },
  {
    id: 2,
    title: "Équipe Expérimentée 👩‍🏫",
    description:
      "Notre équipe possède plus de 15 ans d'expérience en éducation de la petite enfance.",
    color: "bg-[#C6D5DC]",
  },
  {
    id: 3,
    title: "Technologies Modernes 💻",
    description:
      "Utilisation d'outils innovants pour stimuler le potentiel des enfants.",
    color: "bg-[#FBE4D9]",
  },
  {
    id: 4,
    title: "Sécurité Maximale 🛡️",
    description:
      "Environnement sécurisé et propre pour le bien-être des enfants.",
    color: "bg-[#FAD3C7]",
  },
  {
    id: 5,
    title: "Activités Enrichissantes 🎨",
    description:
      "Offre une variété d'activités telles que le sport, l'art, la musique, la dance et les sciences.",
    color: "bg-[#EAF3F2]",
  },
  {
    id: 6,
    title: "Communication Transparente 🤝",
    description:
      "Maintien d'une relation étroite avec les parents via divers canaux de communication.",
    color: "bg-[#C6D5DC]",
  },
  {
    id: 7,
    title: "Réputation d'Excellence 🌟",
    description:
      "Reconnue pour la qualité de nos services, enfants épanouis et parents satisfaits.",
    color: "bg-[#FBE4D9]",
  },
  {
    id: 8,
    title: "Enseignement Bilangue 🌍",
    description: "Initiation dès le jeune âge à l'arabe et français.",
    color: "bg-[#FAD3C7]",
  },
];

const SampleNextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} text-[#FFB166]`}
    style={{
      ...style,
      display: "block",
      right: "10px",
      zIndex: 1,
      fontSize: "48px",
      width: "48px",
      height: "48px",
    }}
    onClick={onClick}
    aria-label="Next slide"
  />
);

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const SamplePrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} text-[#FFB166]`}
    style={{
      ...style,
      display: "block",
      left: "10px",
      zIndex: 1,
      fontSize: "48px",
      width: "48px",
      height: "48px",
    }}
    onClick={onClick}
    aria-label="Previous slide"
  />
);

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const PointsForts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="flex justify-center items-center w-screen py-12 px-4 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-blue">
          Nos valeurs
        </h2>
        <Slider {...settings}>
          {points.map(point => (
            <div key={point.id} className="px-2">
              <div
                className={`${point.color} p-6 rounded-lg shadow-md w-full h-40 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-105 hover:shadow-lg m-2`}
              >
                <h3 className="text-xl font-bold mb-2 text-center text-[#0E1E2B]">
                  {point.title}
                </h3>
                <p className="text-center text-[#0E1E2B]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PointsForts;
