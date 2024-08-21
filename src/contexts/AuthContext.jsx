import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../utils/axiosInstance.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async token => {
    try {
      const response = await axiosInstance.get("/auth/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(
          JSON.parse(
            localStorage.getItem("user") || sessionStorage.getItem("user")
          )
        );
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
    setLoading(false);
  };

  const login = async credentials => {
    try {
      const response = await axiosInstance.post("auth/login", credentials);
      if (response.status === 200 && response.data) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        if (credentials.rememberMe) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return { success: true };
      } else {
        return {
          success: false,
          message: response.data.message || "Login failed",
        };
      }
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "Login failed";
      return { success: false, message: errorMessage };
    }
  };

  const requestPasswordReset = async email => {
    try {
      const response = await axiosInstance.post(
        "/auth/request-password-reset",
        { email }
      );
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response
          ? error.response.data.message
          : "Failed to send password reset email",
      };
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        newPassword,
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response
          ? error.response.data.message
          : "Failed to reset password",
      };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        loading,
        requestPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
