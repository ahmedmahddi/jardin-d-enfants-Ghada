// EnrollmentForm.jsx
import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    program: "",
    startDate: "",
    // Add more fields as needed
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      program: "",
      startDate: "",
      // Reset other fields as needed
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="parentName"
            className="block text-gray-700 font-bold mb-2"
          >
            Parent/Guardian Name
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        {/* Add more form fields here */}
        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
