// WelcomeSection.jsx
import React from "react";
import ImageCarousel from "./ImageCarousel";
const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Daycare!</h1>
        <p className="text-lg">
          Discover a nurturing environment where your child can learn, grow, and
          thrive.
        </p>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default WelcomeSection;
