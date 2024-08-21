import React, { useState, useEffect } from "react";
import Sidebar from "../(authenticated)/common/Sidebar";
import Header from "../(authenticated)/common/Header.jsx";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isCollapsed} />
        <main className="flex-grow p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
      <footer className="text-center p-4 bg-white border-t border-gray-300">
        <p>© 2024 Jardin d'enfant Ghada. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
