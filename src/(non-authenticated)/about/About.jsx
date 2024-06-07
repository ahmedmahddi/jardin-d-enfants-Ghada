import React from "react";
import AboutContent from "./AboutContent";
import Testimonials from "./Testimonials";
import PhotoGallery from "./PhotoGallery";

const About = () => {
  return (
    <div className="relative min-h-screen w-screen rounded-lg shadow-lg overflow-hidden">
      <div>
        <AboutContent />
        <Testimonials />
        <PhotoGallery />
      </div>
    </div>
  );
};

export default About;
