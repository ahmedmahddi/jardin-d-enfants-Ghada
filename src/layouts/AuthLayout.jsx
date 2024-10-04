import React, { useState, useEffect } from "react";
import Sidebar from "../(authenticated)/common/Sidebar";
import Header from "../(authenticated)/common/Header.jsx";
import { Outlet } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const AuthLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const handleResize = debounce(() => {
      setIsCollapsed(window.innerWidth < 1024);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f7]">
      <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
      <div className="flex flex-1">
        {/* Smooth transition for sidebar and main content */}
        <Sidebar isCollapsed={isCollapsed} />
        <main
          className={`flex-grow p-4 overflow-y-auto bg-[#f7f7f7] transition-all duration-300 `}
        >
          <Outlet />
        </main>
      </div>
      <footer className="text-center p-4 bg-[#F4F4F9] rounded-t-lg shadow-lg">
        <p>
          <i className="fas fa-copyright"></i> {new Date().getFullYear()} Jardin
          d'enfant Ghada. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;
