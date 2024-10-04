import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import axiosInstance, { getCsrfToken } from "../utils/axiosInstance.js";

export const AuthContext = createContext();

// Utility function to manage token
const tokenManager = {
  getToken: () => {
    // Check both localStorage and sessionStorage for the token
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  },
  setToken: (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("token", token); // Persist token in localStorage
    } else {
      sessionStorage.setItem("token", token); // Store token in sessionStorage
    }
  },
  removeToken: () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  },
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check token when the component mounts
    const token = tokenManager.getToken();
    if (token) {
      verifyToken(token);
    } else {
      console.warn("No token found on initial load.");
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
        console.log("Token verified successfully.");
        setIsAuthenticated(true);
        setUser(
          JSON.parse(
            localStorage.getItem("user") || sessionStorage.getItem("user")
          )
        );
      } else {
        console.warn("Token verification failed.");
        logout(); // Logout if token is invalid
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      logout(); // Ensure the user is logged out in case of verification failure
    } finally {
      setLoading(false); // Ensure loading state is updated
    }
  };

  const login = async credentials => {
    try {
      const csrfToken = await getCsrfToken();
      const response = await axiosInstance.post("auth/login", credentials, {
        headers: {
          "CSRF-Token": csrfToken,
        },
      });

      if (response.status === 200 && response.data) {
        setIsAuthenticated(true);
        setUser(response.data.user);

        // Store the token and user information
        tokenManager.setToken(response.data.token, credentials.rememberMe);
        if (credentials.rememberMe) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
        }

        return { success: true };
      } else {
        console.warn("Login failed:", response.data.message);
        return {
          success: false,
          message: response.data.message || "Login failed",
        };
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      return {
        success: false,
        message: err.response?.data.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    tokenManager.removeToken();
    localStorage.removeItem("user");
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
