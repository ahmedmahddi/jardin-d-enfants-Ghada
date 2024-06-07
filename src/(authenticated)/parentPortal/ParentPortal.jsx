import React from "react";
import Dashboard from "./Dashboard";
import ChildProfile from "./ChildProfile";
import PaymentSection from "./PaymentSection";
import CommunicationTools from "./CommunicationTools";
import StudentPortfolio from "./StudentPortfolio";
const ParentPortal = () => {
  return (
    <div>
      <main>
        <Dashboard />
        <ChildProfile />
        <PaymentSection />
        <CommunicationTools />
        <StudentPortfolio />
      </main>
    </div>
  );
};

export default ParentPortal;
