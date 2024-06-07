import React from "react";
import WelcomeSection from "./WelcomeSection";
import ProgramDetails from "./ProgramDetails";
import DailySchedule from "./DailySchedule";
import ExtracurricularActivities from "./ExtracurricularActivities";

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
