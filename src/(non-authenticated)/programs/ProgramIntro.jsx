// ProgramIntro.js
import React from "react";
import childrenIMG from "../assets/images/childrenIMG.png"; // Replace with the actual path to your image

const ProgramIntro = () => {
  return (
    <div className="w-screen py-12 bg-lightPeach p-6 rounded-4xl shadow-md flex flex-col items-center mb-6">
      <img
        src={childrenIMG}
        alt="Children"
        className="mb-4 rounded-4xl max-w-xs"
      />
      <p className="text-dark-blue text-lg text-center font-sans">
        Nurturing, Learning, and Growing Together.
      </p>
    </div>
  );
};

export default ProgramIntro;
