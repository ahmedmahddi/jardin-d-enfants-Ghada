import React from "react";

import PointsForts from "../components/home/PointsForts";
import WelcomeSection from "../components/home/WelcomeSection";
import Services from "../components/programs/Services";
import Team from "../components/staff/staff";

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
