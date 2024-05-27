import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    age: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    gender: "",
    hours: "",
    days: [],
    fatherName: "",
    fatherPhone: "",
    fatherEmail: "",
    fatherWork: "",
    motherName: "",
    motherPhone: "",
    motherEmail: "",
    motherWork: "",
    secondPersonName: "",
    secondPersonPhone: "",
    medications: "",
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        days: checked
          ? [...formData.days, value]
          : formData.days.filter(day => day !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      birthdate: "",
      age: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      gender: "",
      hours: "",
      days: [],
      fatherName: "",
      fatherPhone: "",
      fatherEmail: "",
      fatherWork: "",
      motherName: "",
      motherPhone: "",
      motherEmail: "",
      motherWork: "",
      secondPersonName: "",
      secondPersonPhone: "",
      medications: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-transparent shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue">
        Inscription au Jardin d'Enfants
      </h1>
      <p className="text-lg mb-6 text-center text-gray-700">
        Bienvenue au jardin d'enfants Ghada! 🦋 Nous sommes ravis de vous avoir
        avec nous. Veuillez remplir le formulaire ci-dessous pour inscrire votre
        enfant.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange">
            Informations de l'Enfant
          </h2>
          <div className="space-y-4">
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="name"
              >
                Nom et Prénom
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="name"
                name="name"
                placeholder="Prénom Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
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
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
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
                  placeholder="Âge en années"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="address1"
              >
                Adresse
              </label>
              <input
                className="w-full p-3 border rounded-lg mb-2"
                type="text"
                id="address1"
                name="address1"
                placeholder="Adresse de la Rue"
                value={formData.address1}
                onChange={handleChange}
                required
              />
              <div className="flex space-x-2">
                <input
                  className="w-1/2 p-3 border rounded-lg mb-2"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Ville"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-1/2 p-3 border rounded-lg mb-2"
                  type="text"
                  id="state"
                  name="state"
                  placeholder="État / Province"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-dark-blue font-bold mb-2">
                Sexe
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Féminin</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Masculin</span>
                </label>
              </div>
            </div>

            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="hours"
              >
                Heures de garde nécessaires
              </label>
              <select
                className="w-full p-3 border rounded-lg"
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                <option value="full-day">Journée complète</option>
              </select>
            </div>

            <div>
              <label className="block text-dark-blue font-bold mb-2">
                Jours de la semaine nécessaires
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Lundi",
                  "Mardi",
                  "Mercredi",
                  "Jeudi",
                  "Vendredi",
                  "Samedi",
                ].map(day => (
                  <label key={day} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      name="days"
                      value={day.toLowerCase()}
                      checked={formData.days.includes(day.toLowerCase())}
                      onChange={handleChange}
                    />
                    <span className="ml-2">{day}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange">
            Informations des Parents
          </h2>
          <div className="space-y-4">
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="fatherName"
              >
                Nom du Père
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="fatherName"
                name="fatherName"
                placeholder="Prénom Nom"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="fatherPhone"
              >
                Numéro de Téléphone du Père
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="tel"
                id="fatherPhone"
                name="fatherPhone"
                placeholder="000-000-0000"
                value={formData.fatherPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="fatherEmail"
              >
                Adresse Email du Père
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="email"
                id="fatherEmail"
                name="fatherEmail"
                placeholder="exemple@exemple.com"
                value={formData.fatherEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="fatherWork"
              >
                Lieu de Travail du Père
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="fatherWork"
                name="fatherWork"
                value={formData.fatherWork}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="motherName"
              >
                Nom de la Mère
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="motherName"
                name="motherName"
                placeholder="Prénom Nom"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="motherPhone"
              >
                Numéro de Téléphone de la Mère
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="tel"
                id="motherPhone"
                name="motherPhone"
                placeholder="000-000-0000"
                value={formData.motherPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="motherEmail"
              >
                Adresse Email de la Mère
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="email"
                id="motherEmail"
                name="motherEmail"
                placeholder="exemple@exemple.com"
                value={formData.motherEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="motherWork"
              >
                Lieu de Travail de la Mère
              </label>
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                id="motherWork"
                name="motherWork"
                value={formData.motherWork}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-orange">
                Personne Secondaire pour Récupérer l'Enfant
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-dark-blue font-bold mb-2"
                    htmlFor="secondPersonName"
                  >
                    Nom
                  </label>
                  <input
                    className="w-full p-3 border rounded-lg"
                    type="text"
                    id="secondPersonName"
                    name="secondPersonName"
                    placeholder="Prénom et Nom"
                    value={formData.secondPersonName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-dark-blue font-bold mb-2"
                    htmlFor="secondPersonPhone"
                  >
                    Numéro de Téléphone
                  </label>
                  <input
                    className="w-full p-3 border rounded-lg"
                    type="tel"
                    id="secondPersonPhone"
                    name="secondPersonPhone"
                    placeholder="000-000-0000"
                    value={formData.secondPersonPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange">
            Informations Médicales
          </h2>
          <div className="space-y-4">
            <div>
              <label
                className="block text-dark-blue font-bold mb-2"
                htmlFor="medications"
              >
                Veuillez lister les éléments suivants : Complication Médicales,
                Médicaments actuels, allergies aux médicaments, allergies
                alimentaires ou problèmes de santé chroniques
              </label>
              <textarea
                className="w-full p-3 border rounded-lg"
                id="medications"
                name="medications"
                rows="4"
                value={formData.medications}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue text-white px-6 py-3 text-lg rounded-md sm:mb-0 transition-transform transform hover:scale-105"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentForm;
