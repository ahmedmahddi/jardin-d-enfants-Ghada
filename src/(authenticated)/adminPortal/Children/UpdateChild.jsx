// src/authenticated/adminPortal/Children/UpdateChildModal.jsx
import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateChild } from "../../api/Children/children.api.js";

const UpdateChildModal = ({ child, onClose }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(({ id, data }) => updateChild(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("children");
      onClose();
    },
  });

  const [form, setForm] = useState(child);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { id, ...data } = form;
    mutation.mutate({ id, data });
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-4xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange">
          Mettre à Jour l'Enfant
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="childName"
              >
                Nom et Prénom
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="childName"
                name="childName"
                value={form.childName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="birthdate"
              >
                Date de Naissance
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="date"
                id="birthdate"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="age"
              >
                Âge
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="number"
                id="age"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="address"
              >
                Adresse
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="city"
              >
                Ville
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="city"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="state"
              >
                État / Province
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="state"
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-3">
              <label className="block text-dark-blue font-bold mb-2">
                Sexe
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Femenin"
                    checked={form.gender === "Femenin"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Féminin</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Masculin"
                    checked={form.gender === "Masculin"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Masculin</span>
                </label>
              </div>
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="parentName"
              >
                Nom du Parent
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="parentName"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="parentPhone"
              >
                Numéro de Téléphone du Parent
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="tel"
                id="parentPhone"
                name="parentPhone"
                value={form.parentPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="parentEmail"
              >
                Adresse Email du Parent
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={form.parentEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="parentWork"
              >
                Lieu de Travail du Parent
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="parentWork"
                name="parentWork"
                value={form.parentWork}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="secondPersonName"
              >
                Nom de la Personne Secondaire
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="secondPersonName"
                name="secondPersonName"
                value={form.secondPersonName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="secondPersonPhone"
              >
                Personne Secondaire Téléphone
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="tel"
                id="secondPersonPhone"
                name="secondPersonPhone"
                value={form.secondPersonPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="medications"
              >
                Informations Médicales
              </label>
              <textarea
                className="w-full p-3 border rounded-lg"
                id="medications"
                name="medications"
                rows="4"
                value={form.medications}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-4 flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Mettre à Jour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateChildModal;
