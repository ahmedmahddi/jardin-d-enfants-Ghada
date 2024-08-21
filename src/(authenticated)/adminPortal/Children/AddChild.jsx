// src/authenticated/adminPortal/Children/AddChild.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { createChild } from "../../api/Children/children.api.js";

const Notification = ({ message, type, onClose }) => (
  <div
    className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white`}
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-4">
      X
    </button>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

const ChildInfoForm = ({ form, errors, handleChange }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-orange">
      Informations de l'Enfant
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <InputField
        label="Nom et Prénom"
        id="childName"
        name="childName"
        type="text"
        placeholder="Prénom Nom"
        value={form.childName}
        onChange={handleChange}
        error={errors.childName}
        required
      />
      <InputField
        label="Date de Naissance"
        id="birthdate"
        name="birthdate"
        type="date"
        placeholder="Date de Naissance"
        value={form.birthdate}
        onChange={handleChange}
        error={errors.birthdate}
        required
      />
      <InputField
        label="Âge"
        id="age"
        name="age"
        type="number"
        placeholder="Âge en années"
        value={form.age}
        onChange={handleChange}
        error={errors.age}
        required
      />
      <InputField
        label="Adresse"
        id="address"
        name="address"
        type="text"
        placeholder="Adresse de la Rue"
        value={form.address}
        onChange={handleChange}
        error={errors.address}
        required
      />
      <InputField
        label="Ville"
        id="city"
        name="city"
        type="text"
        placeholder="Ville"
        value={form.city}
        onChange={handleChange}
        error={errors.city}
        required
      />
      <InputField
        label="État / Province"
        id="state"
        name="state"
        type="text"
        placeholder="État / Province"
        value={form.state}
        onChange={handleChange}
        error={errors.state}
        required
      />
      <RadioGroup
        label="Genre"
        name="gender"
        options={[
          { value: "Femenin", label: "Féminin" },
          { value: "Masculin", label: "Masculin" },
        ]}
        selectedValue={form.gender}
        onChange={handleChange}
        error={errors.gender}
      />
      <CheckboxGroup
        label="Jours de la semaine nécessaires"
        name="days"
        options={["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]}
        selectedValues={form.days}
        onChange={handleChange}
        error={errors.days}
      />
    </div>
  </div>
);

ChildInfoForm.propTypes = {
  form: PropTypes.shape({
    childName: PropTypes.string,
    birthdate: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    gender: PropTypes.string,
    days: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const ParentInfoForm = ({ form, errors, handleChange }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-orange">
      Informations des Parents
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        label="Nom du Parent"
        id="parentName"
        name="parentName"
        type="text"
        placeholder="Prénom Nom"
        value={form.parentName}
        onChange={handleChange}
        error={errors.parentName}
        required
      />
      <InputField
        label="Numéro de Téléphone du Parent"
        id="parentPhone"
        name="parentPhone"
        type="tel"
        placeholder="000-000-0000"
        value={form.parentPhone}
        onChange={handleChange}
        error={errors.parentPhone}
        required
      />
      <InputField
        label="Adresse Email du Parent"
        id="parentEmail"
        name="parentEmail"
        type="email"
        placeholder="exemple@exemple.com"
        value={form.parentEmail}
        onChange={handleChange}
        error={errors.parentEmail}
        required
      />
      <InputField
        label="Lieu de Travail du Parent"
        id="parentWork"
        name="parentWork"
        placeholder="Lieu de Travail"
        type="text"
        value={form.parentWork}
        onChange={handleChange}
        error={errors.parentWork}
        required
      />
    </div>
  </div>
);

ParentInfoForm.propTypes = {
  form: PropTypes.shape({
    parentName: PropTypes.string,
    parentPhone: PropTypes.string,
    parentEmail: PropTypes.string,
    parentWork: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const SecondaryPersonForm = ({ form, errors, handleChange }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold mb-2 text-orange">
      Contact d'urgence (Personne Secondaire)
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <InputField
        label="Nom"
        id="secondPersonName"
        name="secondPersonName"
        type="text"
        placeholder="Prénom et Nom"
        value={form.secondPersonName}
        onChange={handleChange}
        error={errors.secondPersonName}
        required
      />
      <InputField
        label="Numéro de Téléphone"
        id="secondPersonPhone"
        name="secondPersonPhone"
        type="tel"
        placeholder="000-000-0000"
        value={form.secondPersonPhone}
        onChange={handleChange}
        error={errors.secondPersonPhone}
        required
      />
    </div>
  </div>
);

SecondaryPersonForm.propTypes = {
  form: PropTypes.shape({
    secondPersonName: PropTypes.string,
    secondPersonPhone: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const MedicalInfoForm = ({ form, errors, handleChange }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-orange">
      Informations Médicales
    </h2>
    <div className="space-y-3">
      <label
        className="block text-dark-blue font-bold mb-2"
        htmlFor="medications"
      >
        Veuillez lister les éléments suivants : Complication Médicales,
        Médicaments actuels, allergies aux médicaments, allergies alimentaires
        ou problèmes de santé chroniques
      </label>
      <textarea
        className="w-full p-2 border rounded-lg"
        id="medications"
        name="medications"
        rows="4"
        placeholder="Complications Médicales, Médicaments, Allergies, etc."
        value={form.medications}
        onChange={handleChange}
        required
      ></textarea>
      {errors.medications && (
        <p className="text-red-500 text-sm">{errors.medications}</p>
      )}
    </div>
  </div>
);

MedicalInfoForm.propTypes = {
  form: PropTypes.shape({
    medications: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}) => (
  <div>
    <label className="block text-dark-blue font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full p-2 border rounded-lg"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

const RadioGroup = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  error,
}) => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3">
    <label className="block text-dark-blue font-bold mb-2">{label}</label>
    <div className="flex space-x-3">
      {options.map(option => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const CheckboxGroup = ({
  label,
  name,
  options,
  selectedValues,
  onChange,
  error,
}) => (
  <div className="col-span-1 md:col-span-2 lg:col-span-3">
    <label className="block text-dark-blue font-bold mb-2">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {options.map(option => (
        <label key={option} className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            name={name}
            value={option.toLowerCase()}
            checked={selectedValues.includes(option.toLowerCase())}
            onChange={onChange}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const AddChild = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(createChild, {
    onSuccess: () => {
      queryClient.invalidateQueries("children");
      setNotification({
        message: "Enfant ajouté avec succès!",
        type: "success",
      });
    },
    onError: error => {
      console.error("Error creating child:", error);
      setErrorMsg(error.response?.data?.error || "Failed to create child.");
      setNotification({
        message: "Échec de l'ajout de l'enfant.",
        type: "error",
      });
    },
  });

  const [form, setForm] = useState({
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

  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [notification, setNotification] = useState(null);

  const handleNotificationClose = () => {
    setNotification(null);
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm(prevState => ({
        ...prevState,
        days: checked
          ? [...prevState.days, value]
          : prevState.days.filter(day => day !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateField = (field, value) => {
    switch (field) {
      case "childName":
        if (!value.trim()) return "Nom et Prénom est requis.";
        break;
      case "birthdate":
        if (!value) return "Date de Naissance est requise.";
        break;
      case "age":
        if (!value || isNaN(value) || value <= 0)
          return "Âge valide est requis.";
        break;
      case "address":
        if (!value.trim()) return "Adresse est requise.";
        break;
      case "city":
        if (!value.trim()) return "Ville est requise.";
        break;
      case "state":
        if (!value.trim()) return "État / Province est requis.";
        break;
      case "gender":
        if (!value) return "Sexe est requis.";
        break;
      case "days":
        if (value.length === 0) return "Au moins un jour est requis.";
        break;
      case "parentName":
        if (!value.trim()) return "Nom du Parent est requis.";
        break;
      case "parentPhone":
        if (!value.trim()) return "Numéro de Téléphone du Parent est requis.";
        break;
      case "parentEmail":
        if (!value.trim()) return "Adresse Email du Parent est requise.";
        break;
      case "parentWork":
        if (!value.trim()) return "Lieu de Travail du Parent est requis.";
        break;
      case "secondPersonName":
        if (!value.trim()) return "Nom de la Personne Secondaire est requis.";
        break;
      case "secondPersonPhone":
        if (!value.trim())
          return "Numéro de Téléphone de la Personne Secondaire est requis.";
        break;
      case "medications":
        if (!value.trim()) return "Informations Médicales sont requises.";
        break;
      default:
        return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
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
      console.log("Form data before sending:", form);
      mutation.mutate(form);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Ajouter Enfant</h2>
      <form onSubmit={handleSubmit}>
        <ChildInfoForm
          form={form}
          errors={errors}
          handleChange={handleChange}
        />
        <ParentInfoForm
          form={form}
          errors={errors}
          handleChange={handleChange}
        />
        <SecondaryPersonForm
          form={form}
          errors={errors}
          handleChange={handleChange}
        />
        <MedicalInfoForm
          form={form}
          errors={errors}
          handleChange={handleChange}
        />
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ajouter
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default AddChild;
