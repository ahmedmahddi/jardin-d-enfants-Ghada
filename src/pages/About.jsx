import React from "react";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import AboutContent from "../components/about/AboutContent";
import Testimonials from "../components/about/Testimonials";
import PhotoGallery from "../components/about/PhotoGallery";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <AboutContent />
        <Testimonials />
        <PhotoGallery />
      </main>
      <Footer />
    </>
  );
};

export default About;
