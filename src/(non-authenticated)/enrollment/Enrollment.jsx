import React from "react";
import EnrollmentForm from "./EnrollmentForm";

const Enrollment = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 py-16 w-screen overflow-hidden">
        <div className="container mx-auto px-4">
          <EnrollmentForm />
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
