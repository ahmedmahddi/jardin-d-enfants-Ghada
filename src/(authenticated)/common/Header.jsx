// src/authenticated/common/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="text-2xl font-bold">
          Daycare
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/profile" className="hover:text-gray-200">
          Profile
        </Link>
        <Link to="/logout" className="hover:text-gray-200">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
