// src/(non-authenticated)/login/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logo from "../assets/images/logo-JDG.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await login(credentials);
    console.log("Login result:", response); // Log response
    if (response.success) {
      navigate("/parent-portal");
    } else {
      setError(response.message);
    }
  };

  return (
    <div>
      <main className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-100 to-pink-50 w-screen">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-md w-full max-w-sm">
          <div className="flex flex-col items-center mb-4">
            <img src={logo} alt="Daycare Logo" className="h-20 w-50" />
            <h2 className="text-2xl font-bold mb-4 text-center text-orange">
              Jardin d'enfant Ghada
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg text-gray-700">Username</label>
              <input
                type="text"
                name="userName"
                value={credentials.userName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="********"
                required
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Se Connecter
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
