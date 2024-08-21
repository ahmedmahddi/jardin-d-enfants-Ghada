import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faBookOpen,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const AboutContent = () => {
  const iconStyles = {
    background: "linear-gradient(to right, #ffcc00, #ff66cc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="w-screen py-12 bg-gradient-to-r from-yellow-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8 bg-white bg-opacity-80 rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange mb-4 text-center">
            Notre Histoire
          </h2>
          <p className="text-dark-blue leading-relaxed text-center">
            Le Jardin d'enfants Ghada a été fondé en 1995 dans le but de fournir
            des services de garde d'enfants de haute qualité aux familles de
            notre communauté. Au fil des années, nous avons grandi et étendu nos
            installations pour accueillir plus d'enfants et offrir une gamme
            plus large de programmes.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange mb-4 text-center">
            Notre Philosophie
          </h2>
          <p className="text-dark-blue leading-relaxed mb-4 text-center">
            Chez Sunshine Daycare, nous croyons que chaque enfant est unique et
            mérite un environnement sûr, nourrissant et stimulant pour grandir
            et apprendre. Notre personnel expérimenté et attentionné est dédié à
            favoriser le développement physique, émotionnel, social et cognitif
            de chaque enfant à travers des activités adaptées à leur âge et un
            programme d'études complet.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center mb-2">
              <FontAwesomeIcon
                icon={faPaintBrush}
                className="w-8 h-8 mb-2"
                style={iconStyles}
              />
              <span className="text-center">Créativité</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="w-8 h-8 mb-2"
                style={iconStyles}
              />
              <span className="text-center">Éducation</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <FontAwesomeIcon
                icon={faGamepad}
                className="w-8 h-8 mb-2"
                style={iconStyles}
              />
              <span className="text-center">Jeux</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-orange mb-4 text-center">
            Notre Mission
          </h2>
          <p className="text-dark-blue leading-relaxed text-center">
            Notre mission est de fournir un environnement sûr et enrichissant où
            chaque enfant peut s'épanouir. Nous nous engageons à soutenir le
            développement global de chaque enfant et à encourager leur amour de
            l'apprentissage à travers des expériences positives et
            enrichissantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
