import React from "react";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Dashboard from "../components/parentPortal/Dashboard";
import ChildProfile from "../components/parentPortal/ChildProfile";
import PaymentSection from "../components/parentPortal/PaymentSection";
import CommunicationTools from "../components/parentPortal/CommunicationTools";
import StudentPortfolio from "../components/parentPortal/StudentPortfolio";
import Footer from "../components/common/Footer";

const ParentPortal = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Dashboard />
        <ChildProfile />
        <PaymentSection />
        <CommunicationTools />
        <StudentPortfolio />
      </main>
      <Footer />
    </>
  );
};

export default ParentPortal;
