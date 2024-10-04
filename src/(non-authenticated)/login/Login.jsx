import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../assets/images/logo-JDG.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await login(credentials); // No role in credentials now
    if (response.success) {
      navigate("/admin");
    } else {
      setError(response.message);
    }
  };

  const handleResetPassword = () => {
    navigate("/reset-password"); // Assuming you have a route for reset password
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-r from-yellow-50 to-pink-50">
      <main className="flex items-center justify-center grow">
        <div className="p-6 bg-white bg-opacity-50 rounded-lg shadow-md w-full max-w-md">
          <img src={logo} alt="Daycare Logo" className="mx-auto h-20 mb-4" />
          <h2 className="text-center text-xl text-blue-800 mb-6">
            Jardin d'enfant Ghada
          </h2>
          <p className="text-center text-lg text-blue-800 mb-6">
            veuillez saisir vos identifiants fournis dans l'e-mail reçu.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={credentials.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Se souvenir de moi
              </label>
            </div>
            {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se Connecter
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={handleResetPassword}
            >
              Mot de passe oublié?
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
