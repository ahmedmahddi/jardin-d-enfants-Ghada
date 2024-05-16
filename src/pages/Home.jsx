import React from "react";
import Header from "../components/common/Header";
//import Navigation from "../components/common/Navigation";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
