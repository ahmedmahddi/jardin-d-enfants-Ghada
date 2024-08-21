// src/components/StaffForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { createStaff } from "../../api/Staff/staff.api";
import Notification from "../../common/Notification";

const StaffForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const queryClient = useQueryClient();
  const mutation = useMutation(createStaff, {
    onSuccess: () => {
      queryClient.invalidateQueries("staff");
      setNotification({
        message: "Le personnel a été créé avec succès !",
        type: "success",
      });
      setFormData({ name: "", position: "", email: "", phone: "" });
    },
    onError: error => {
      setNotification({
        message:
          error.response?.data?.message ||
          "Erreur lors de la création du personnel",
        type: "error",
      });
    },
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Le nom est requis.";
        break;
      case "position":
        if (!value.trim()) return "Le poste est requis.";
        break;
      case "email":
        if (!value.trim()) return "L'email est requis.";
        if (!/\S+@\S+\.\S+/.test(value)) return "L'adresse email est invalide.";
        break;
      case "phone":
        if (value && !/^\d{8}$/.test(value))
          return "Le numéro de téléphone est invalide.";
        break;
      default:
        return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length > 0) {
      setErrors(formValidationErrors);
    } else {
      mutation.mutate(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center">Créer Personnel</h2>
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
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
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

StaffForm.propTypes = {
  notification: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default StaffForm;
