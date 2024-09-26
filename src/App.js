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
import ResetPassword from "./(non-authenticated)/login/reset-password";
import NewPassword from "./(non-authenticated)/login/newPassword";
import ConditionPage from "./(non-authenticated)/conditions/condtion_genrale";
import PrivacyPolicy from "./(non-authenticated)/conditions/policy";
import Licences from "./(non-authenticated)/conditions/licence";

// Import authenticated pages
import AdminPortal from "./(authenticated)/adminPortal/AdminPortal";

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
          <Route path="terms" element={<ConditionPage />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="licensing" element={<Licences />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-password/:token" element={<NewPassword />} />
          <Route
            path="pourquoi-nous-choisir"
            element={<PourquoiNousChoisir />}
          />
        </Route>

        {/* Authenticated routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="admin/*" element={<AuthLayout />}>
            <Route path="*" element={<AdminPortal />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
