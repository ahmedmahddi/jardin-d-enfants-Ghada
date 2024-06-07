// src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../(authenticated)/common/Header";
import Footer from "../(authenticated)/common/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
