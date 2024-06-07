// src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../(authenticated)/common/Header";
import Footer from "../(authenticated)/common/Footer";
import Sidebar from "../(authenticated)/common/Sidebar";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
