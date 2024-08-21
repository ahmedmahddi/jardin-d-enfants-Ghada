import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await resetPassword(token, newPassword);
    setMessage(response.message);
    if (response.success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-r from-yellow-50 to-pink-50">
      <main className="flex items-center justify-center grow">
        <div className="p-6 bg-white bg-opacity-50 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-center text-xl text-blue-800 mb-6">
            Reset Password
          </h2>
          <p className="text-center text-lg text-blue-800 mb-6">
            Please enter your new password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {message && (
              <div className="text-blue-500 text-xs mt-2">{message}</div>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewPassword;
