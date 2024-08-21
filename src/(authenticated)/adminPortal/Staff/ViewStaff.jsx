// src/authenticated/adminPortal/Staff/ViewStaffModal.jsx
import React from "react";
import PropTypes from "prop-types";

const ViewStaffModal = ({ staff, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Détails du Personnel</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Nom:</label>
          <p>{staff.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Poste:</label>
          <p>{staff.position}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <p>{staff.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Téléphone:</label>
          <p>{staff.phone}</p>
        </div>
        <div className="text-right">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

ViewStaffModal.propTypes = {
  staff: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ViewStaffModal;
