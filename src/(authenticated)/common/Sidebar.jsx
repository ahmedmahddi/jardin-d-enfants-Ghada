// src/authenticated/common/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed h-screen">
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/students"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Students
        </NavLink>
        <NavLink
          to="/schedule"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Schedule
        </NavLink>
        <NavLink
          to="/events"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Events
        </NavLink>
        <NavLink
          to="/payments"
          className="block py-2.5 px-4 rounded hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Payments
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
