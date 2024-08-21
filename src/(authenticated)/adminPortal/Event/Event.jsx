import React from "react";
import CalendarView from "./CalendarView";

const Event = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-full">
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

export default Event;
