import React, { useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance.js";

// Constants for reusable data
const DAYS_OF_WEEK = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const GENDER_OPTIONS = [
  { value: "Féminin", label: "Féminin" },
  { value: "Masculin", label: "Masculin" },
];

// Custom reusable input component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-dark-blue font-bold mb-2" htmlFor={name}>
      {label} <span className="float-right text-gray-500">{placeholder}</span>
    </label>
    <input
      className="w-full p-3 border rounded-lg"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

// Define PropTypes for InputField
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

// Custom reusable select component
const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="block text-dark-blue font-bold mb-2" htmlFor={name}>
      {label} <span className="float-right text-gray-500">الجنس</span>
    </label>
    <select
      className="w-full p-3 border rounded-lg"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="" disabled>
        Sélectionnez le genre
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Define PropTypes for SelectField
SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    birthdate: "",
    age: "",
    address: "",
    city: "",
    state: "",
    gender: "",
    days: [],
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    parentWork: "",
    secondPersonName: "",
    secondPersonPhone: "",
    medications: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        days: checked
          ? [...formData.days, value]
          : formData.days.filter(day => day !== value),
      });
    } else if (name === "birthdate") {
      const formattedDate = formatDate(value);
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await axiosInstance.post("enrollments/", formData);
      setFormData({
        childName: "",
        birthdate: "",
        age: "",
        address: "",
        city: "",
        state: "",
        gender: "",
        days: [],
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        parentWork: "",
        secondPersonName: "",
        secondPersonPhone: "",
        medications: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-50 shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange">
        Inscription au Jardin d'Enfants
      </h1>
      <p className="text-lg mb-6 text-center text-gray-700">
        Bienvenue au jardin d'enfants Ghada! 🦋 Nous sommes ravis de vous avoir
        avec nous. Veuillez remplir le formulaire ci-dessous pour inscrire votre
        enfant.
      </p>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue text-center">
            Informations de l'Enfant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Nom et Prénom"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="الاسم الكامل"
              required
            />
            <InputField
              label="Date de Naissance"
              name="birthdate"
              type="date"
              value={formData.birthdate}
              onChange={handleChange}
              placeholder="تاريخ الميلاد"
              required
            />
            <InputField
              label="Âge"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="العمر"
              required
            />
            <InputField
              label="Adresse"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="العنوان"
              required
              className="col-span-3"
            />
            <InputField
              label="Ville"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="المدينة"
              required
            />
            <InputField
              label="État / Province"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="الولاية / المقاطعة"
              required
            />
            <SelectField
              label="Genre"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={GENDER_OPTIONS}
              required
            />
          </div>
          <div className="grid grid-cols-1 mt-4">
            <div>
              <label
                htmlFor="days"
                className="block text-dark-blue font-bold mb-2"
              >
                Jours de la semaine nécessaires{" "}
                <span className="float-right text-gray-500">
                  أيام الأسبوع المطلوبة
                </span>
              </label>
              <div className="flex flex-wrap gap-x-12 gap-y-2">
                {DAYS_OF_WEEK.map(day => (
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
          <h2 className="text-2xl font-semibold mb-4 text-blue text-center">
            Informations des Parents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Nom et prenom du Parent"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="إسم و لقب الولي"
              required
            />
            <InputField
              label="Numéro de Téléphone du Parent"
              name="parentPhone"
              type="tel"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="رقم هاتف الولي"
              required
            />
            <InputField
              label="Adresse Email du Parent"
              name="parentEmail"
              type="email"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="عنوان البريد الإلكتروني الولي"
              required
            />
            <InputField
              label="Lieu de Travail du Parent"
              name="parentWork"
              value={formData.parentWork}
              onChange={handleChange}
              placeholder="مكان عمل الولي"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue text-center">
            Personne Secondaire pour Récupérer l'Enfant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Nom"
              name="secondPersonName"
              value={formData.secondPersonName}
              onChange={handleChange}
              placeholder="إسم و لقب"
              required
            />
            <InputField
              label="Numéro de Téléphone"
              name="secondPersonPhone"
              type="tel"
              value={formData.secondPersonPhone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue text-center">
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
                alimentaires ou problèmes de santé chroniques{" "}
                <span className="float-right text-gray-500">
                  يرجى إدخال العناصر التالية: المضاعفات الطبية، الأدوية الحالية،
                  الحساسية تجاه الأدوية، الحساسية الغذائية أو المشكلات الصحية
                  المزمنة
                </span>
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
            className="w-full bg-orange text-white px-6 py-3 text-lg rounded-md sm:mb-0 transition-transform transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Soumission en cours..." : "Soumettre"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentForm;
