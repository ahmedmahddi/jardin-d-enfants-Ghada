// src/authenticated/adminPortal/Children/ViewChildModal.jsx
import React from "react";

const ViewChildModal = ({ child, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Détails de l'Enfant
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Nom et Prénom:</strong> {child.childName}
            </p>
            <p>
              <strong>Date de Naissance:</strong>{" "}
              {new Date(child.birthdate).toLocaleDateString()}
            </p>
            <p>
              <strong>Âge:</strong> {child.age}
            </p>
            <p>
              <strong>Adresse:</strong> {child.address}
            </p>
            <p>
              <strong>Ville:</strong> {child.city}
            </p>
            <p>
              <strong>État / Province:</strong> {child.state}
            </p>
            <p>
              <strong>Sexe:</strong> {child.gender}
            </p>
          </div>
          <div>
            <p>
              <strong>Nom du Parent:</strong> {child.parentName}
            </p>
            <p>
              <strong>Numéro de Téléphone du Parent:</strong>{" "}
              {child.parentPhone}
            </p>
            <p>
              <strong>Email du Parent:</strong> {child.parentEmail}
            </p>
            <p>
              <strong>Lieu de Travail du Parent:</strong> {child.parentWork}
            </p>
            <p>
              <strong>Nom de la Personne Secondaire:</strong>{" "}
              {child.secondPersonName}
            </p>
            <p>
              <strong>Numéro de Téléphone de la Personne Secondaire:</strong>{" "}
              {child.secondPersonPhone}
            </p>
            <p>
              <strong>Informations Médicales:</strong> {child.medications}
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewChildModal;
