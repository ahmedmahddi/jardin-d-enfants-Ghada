import React, { useState } from "react";
import logo from "../assets/images/logo-JDG.png"; // Assume you have a logo for the daycare

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic
    console.log("Login credentials:", credentials);
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
              <label className="block text-lg text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
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
