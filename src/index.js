import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./styles/tailwind.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
