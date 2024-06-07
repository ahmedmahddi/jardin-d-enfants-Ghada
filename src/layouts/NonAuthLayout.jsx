// src/layouts/NonAuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../(non-authenticated)/common/Header";
import Footer from "../(non-authenticated)/common/Footer";

const NonAuthLayout = () => {
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

export default NonAuthLayout;
