// src/contexts/AuthContext.jsx
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../utils/axiosInstance.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const login = async credentials => {
    try {
      const response = await axiosInstance.post("user/login", credentials);
      console.log("Login response:", response.data); // Log response
      if (response.status === 200 && response.data) {
        setIsAuthenticated(true);
        setUser(response.data);
        return { success: true };
      } else {
        return { success: false, message: response.message || "Login failed" };
      }
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "Login failed";
      return { success: false, message: errorMessage };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
