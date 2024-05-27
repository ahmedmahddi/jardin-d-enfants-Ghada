import React from "react";
import WelcomeSection from "../components/programs/WelcomeSection";
import ProgramDetails from "../components/programs/ProgramDetails";
import DailySchedule from "../components/programs/DailySchedule";
import ExtracurricularActivities from "../components/programs/ExtracurricularActivities";

const Programs = () => {
  return (
    <div className="relative min-h-screen bg-center rounded-lg shadow-lg">
      <div>
        <WelcomeSection />
        <ProgramDetails />
        <DailySchedule />
        <ExtracurricularActivities />
      </div>
    </div>
  );
};

export default Programs;
