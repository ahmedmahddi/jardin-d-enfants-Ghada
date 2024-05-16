import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./styles/tailwind.css";
import ErrorBoundary from "./components/common/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AuthContextProvider>
  </React.StrictMode>
);
