import React from "react";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import ProgramDetails from "../components/programs/ProgramDetails";
import DailySchedule from "../components/programs/DailySchedule";
import ExtracurricularActivities from "../components/programs/ExtracurricularActivities";
import Footer from "../components/common/Footer";

const Programs = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <ProgramDetails />
        <DailySchedule />
        <ExtracurricularActivities />
      </main>
      <Footer />
    </>
  );
};

export default Programs;
