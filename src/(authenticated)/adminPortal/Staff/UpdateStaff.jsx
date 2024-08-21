// src/authenticated/adminPortal/Staff/UpdateStaffModal.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { updateStaff } from "../../api/Staff/staff.api";

const UpdateStaffModal = ({ staff, onClose }) => {
  const [formData, setFormData] = useState({
    name: staff.name,
    position: staff.position,
    email: staff.email,
    phone: staff.phone,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(
    updatedStaff => updateStaff(staff.id, updatedStaff), // Ensure staff.id is passed here correctly
    {
      onSuccess: () => {
        queryClient.invalidateQueries("staff");
        onClose(); // Close the modal on success
      },
      onError: error => {
        console.error("Error updating staff:", error);
        // handle error (e.g., show error message)
      },
    }
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutation.mutate({ id: staff.id, ...formData });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Modifier Personnel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block text-gray-700">
              Poste
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateStaffModal.propTypes = {
  staff: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateStaffModal;
