import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Enrollment from "./pages/Enrollment";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ParentPortal from "./pages/ParentPortal";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext"; // Correct import

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/parent-portal"
            element={<ProtectedRoute element={ParentPortal} />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
