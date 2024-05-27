import React from "react";

const AboutContent = () => {
  return (
    <section className="w-screen py-12 bg-gradient-to-r from-yellow-100 to-pink-50">
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
              <svg
                className="w-8 h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                id="creativity"
              >
                <defs>
                  <linearGradient
                    id="gradCreativity"
                    x1="173.958"
                    x2="339.47"
                    y1="343.013"
                    y2="177.501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffcc00" />
                    <stop offset="1" stopColor="#ff66cc" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradCreativity)"
                  d="M342.313 291.392c30.145-.27 61.27-.811 91.399-.818 30.13-.007 60.255.547 90.398.82.36-3.683 4.827-4.682 7.178-9.537 .008-.017.844-3.776 1.211-5.833.811-4.296-3.017-13.735-13.543-15.334-10.907-1.643-18.517 3.975-22.16 7.467 1.255-2.685-1.729-4.685-2.708-6.554-4.255-8.444-9.545-18.379-18.948-19.024-5.168-.349-12.753-.145-18.96 1.778-.468.135-1.477.993-2.078 1.987-5.235 5.083-10.677 9.722-16.86 9.556.912 4.605-27.332-34.186-38.094-40.706-10.562-6.325-19.955-12.878-27.812-19.669-29.471-26.214-48.801-42.552-58.688-64.823.665.006.292-.449.317-.844-52.056-.494-89.97 3.15-135.272-19.896-4.829-2.655-9.25-5.985-13.603-9.858-5.852-5.35-11.587-11.112-17.238-17.04-.717-.778-.888 1.067.569 2.208zM27.91 348.106c-.017-.208-14.605-.454-18.969 2.09-2.632 1.503-2.206 1.62-3.446 4.48l-8.958 21.696c-10.517 12.35-14.528 21.154-16.15 24.5-.257.549 1.071 2.428 2.662 1.611z"
                />
              </svg>
              <span className="text-center">Créativité</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <svg
                className="w-8 h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="education"
              >
                <defs>
                  <linearGradient
                    id="gradEducation"
                    x1="1.5"
                    x2="20.5"
                    y1="12"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffcc00" />
                    <stop offset="1" stopColor="#ff66cc" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradEducation)"
                  d="M17 19h-3v-2h2v-6.385L12 8.359l-4.525 2.256V17h2v2H7v-5.632L12 8.271l5 3.097v4.632h-2v2h3V19zM12 2L2 8h20L12 2zm10 6L12 18 2 8v2.236L12 20l10-9.764V8z"
                ></path>
              </svg>
              <span className="text-center">Éducation</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <svg
                className="w-8 h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="play"
              >
                <defs>
                  <linearGradient
                    id="gradPlay"
                    x1="2.5"
                    x2="21.5"
                    y1="12"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffcc00" />
                    <stop offset="1" stopColor="#ff66cc" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradPlay)"
                  d="M21.285 12l-19.57-10A1 1 0 0 0 .647 2v20a1 1 0 0 0 1.474.879l19.57-10a1 1 0 0 0 0-1.758z"
                ></path>
              </svg>
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
