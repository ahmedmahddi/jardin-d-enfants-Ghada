import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EnrollmentDetailsModal = ({ isOpen, enrollment, onClose }) => {
  if (!isOpen || !enrollment) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Détails de l'inscription</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div>
          <p>
            <strong>Nom de l'enfant:</strong> {enrollment.childName}
          </p>
          <p>
            <strong>Date de naissance:</strong>{" "}
            {new Date(enrollment.birthdate).toLocaleDateString()}
          </p>
          <p>
            <strong>Âge:</strong> {enrollment.age}
          </p>
          <p>
            <strong>Adresse:</strong> {enrollment.address}
          </p>
          <p>
            <strong>Ville:</strong> {enrollment.city}
          </p>
          <p>
            <strong>État:</strong> {enrollment.state}
          </p>
          <p>
            <strong>Genre:</strong> {enrollment.gender}
          </p>
          <p>
            <strong>Jours:</strong> {enrollment.days.join(", ")}
          </p>
          <p>
            <strong>Nom du parent:</strong> {enrollment.parentName}
          </p>
          <p>
            <strong>Téléphone du parent:</strong> {enrollment.parentPhone}
          </p>
          <p>
            <strong>Email du parent:</strong> {enrollment.parentEmail}
          </p>
          <p>
            <strong>Travail du parent:</strong> {enrollment.parentWork}
          </p>
          <p>
            <strong>Nom de la seconde personne:</strong>{" "}
            {enrollment.secondPersonName}
          </p>
          <p>
            <strong>Téléphone de la seconde personne:</strong>{" "}
            {enrollment.secondPersonPhone}
          </p>
          <p>
            <strong>Médicaments:</strong> {enrollment.medications}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

EnrollmentDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  enrollment: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default EnrollmentDetailsModal;
