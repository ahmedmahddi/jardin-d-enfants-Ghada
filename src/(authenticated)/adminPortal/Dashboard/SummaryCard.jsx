// File path: src/components/SummaryCard.js
import React from "react";
import PropTypes from "prop-types";
import Student from "../../assets/images/students-svg.svg";
import Teacher from "../../assets/images/teachers-svg.svg";
import Inscription from "../../assets/images/Enrollment.png";
import facture from "../../assets/images/facture.png";

const icons = {
  "Nombre total d'enfants": (
    <img src={Student} alt="Student Icon" className="w-10 h-10" />
  ),
  "Nombre de personnel": (
    <img src={Teacher} alt="Teacher Icon" className="w-10 h-10" />
  ),
  "Nombre d'inscriptions": (
    <img src={Inscription} alt="Enrollments Icon" className="w-10 h-10" />
  ),
  "Nombre de factures": (
    <img src={facture} alt="Invoice Icon" className="w-10 h-10" />
  ),
};

const SummaryCard = ({ title, value }) => (
  <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md flex items-center justify-between w-full h-[134px]">
    <div className="flex-1">
      <h2 className="text-md lg:text-lg font-semibold">{title}</h2>
      <p className="text-xl lg:text-2xl font-bold">{value}</p>
    </div>
    <div>{icons[title]}</div>
  </div>
);

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SummaryCard;
