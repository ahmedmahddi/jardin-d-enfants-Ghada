import React from "react";
import AboutContent from "../components/about/AboutContent";
import Testimonials from "../components/about/Testimonials";
import PhotoGallery from "../components/about/PhotoGallery";

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
