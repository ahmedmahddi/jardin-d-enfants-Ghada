// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import non-authenticated pages
import Home from "./(non-authenticated)/home/Home";
import About from "./(non-authenticated)/about/About";
import Programs from "./(non-authenticated)/programs/Programs";
import Enrollment from "./(non-authenticated)/enrollment/Enrollment";
import ContactUs from "./(non-authenticated)/contact/ContactUs";
import PourquoiNousChoisir from "./(non-authenticated)/home/PourquoiNousChoisir";
import Login from "./(non-authenticated)/login/Login";
import Register from "./(non-authenticated)/register/Register";

// Import authenticated pages
import ParentPortal from "./(authenticated)/parentPortal/ParentPortal";

// Import common components
import PrivateRoute from "./(authenticated)/common/PrivateRoute";
import NonAuthLayout from "./layouts/NonAuthLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Non-authenticated routes */}
        <Route path="/" element={<NonAuthLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="enrollment" element={<Enrollment />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="pourquoi-nous-choisir"
            element={<PourquoiNousChoisir />}
          />
        </Route>

        {/* Authenticated routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<AuthLayout />}>
            <Route path="parent-portal" element={<ParentPortal />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
