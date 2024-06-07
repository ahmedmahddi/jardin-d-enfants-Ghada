import React from "react";
import { useSpring, animated } from "@react-spring/web";
import bgimg from "../assets/images/background-img.png";

import "../../styles/tailwind.css";

const WelcomeSection = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  const fadeInWithDelay = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 500,
  });

  return (
    <div>
      <section className="relative h-screen w-screen bg-gray-700">
        <div
          id="bgimg"
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-orange-200 px-4">
          <animated.h1
            style={fadeIn}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl drop-shadow-md"
          >
            Bienvenue à Jardin d'Enfants Ghada
          </animated.h1>
          <animated.p
            style={fadeIn}
            className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 drop-shadow-md"
          >
            Chaque enfant est chéri et encouragé ici. Ensemble, partageons des
            moments joyeux et de découvertes. Bienvenue parmi nous ! 🦋
          </animated.p>
          <animated.div
            style={fadeInWithDelay}
            className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
          >
            <a
              href="/enrollment"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent hover:bg-blue-75 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 drop-shadow-md"
            >
              Inscription en ligne
              <svg
                className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 drop-shadow-md"
            >
              Learn more
            </a>
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
