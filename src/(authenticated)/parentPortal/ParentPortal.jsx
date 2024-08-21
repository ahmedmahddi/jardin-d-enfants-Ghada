import React from "react";
import Dashboard from "./Dashboard";
import ChildProfile from "./ChildProfile";

const ParentPortal = () => {
  return (
    <div>
      <main>
        <Dashboard />
        <ChildProfile />
      </main>
    </div>
  );
};

export default ParentPortal;
