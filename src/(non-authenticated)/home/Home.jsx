import React from "react";

import PointsForts from "./PointsForts";
import WelcomeSection from "./WelcomeSection";
import Services from "./Services";
import Team from "./staff";

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen rounded-lg shadow-lg overflow-hidden">
      <main>
        <WelcomeSection />
        <PointsForts />
        <Services />
        <Team />
      </main>
    </div>
  );
};

export default Home;
