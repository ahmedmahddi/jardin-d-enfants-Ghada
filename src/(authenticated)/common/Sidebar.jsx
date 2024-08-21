import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MenuItem = ({ to, icon, label, isCollapsed, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (to) {
      navigate(to);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mb-2">
      <div
        className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        onClick={handleToggle}
      >
        <i className={`${icon} mr-3 text-lg`}></i>
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } text-sm font-semibold`}
        >
          {label}
        </span>
        {children && (
          <i
            className={`fas fa-chevron-${isOpen ? "down" : "right"} ml-auto`}
          ></i>
        )}
      </div>
      {isOpen && children && (
        <div className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
          {children}
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={`bg-white h-full transition-all duration-300 shadow-lg ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-2">Menu</p>
        <MenuItem
          icon="fas fa-tachometer-alt"
          label="Tableau de bord"
          isCollapsed={isCollapsed}
          to="/admin"
        ></MenuItem>
        <MenuItem
          icon="fas fa-book"
          label="Inscriptions"
          isCollapsed={isCollapsed}
          to="/admin/enrollments/list"
        ></MenuItem>
        <MenuItem
          icon="fas fa-user-graduate"
          label="Enfants"
          isCollapsed={isCollapsed}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/children/add"
          >
            <i className="fas fa-plus mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Ajouter Enfant
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/children/list"
          >
            <i className="fas fa-list mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Liste des Enfants
            </span>
          </NavLink>
        </MenuItem>
        <MenuItem
          icon="fas fa-chalkboard-teacher"
          label="Enseignants"
          isCollapsed={isCollapsed}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/staff/add"
          >
            <i className="fas fa-plus mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Ajouter Enseignant
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/staff/list"
          >
            <i className="fas fa-list mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Liste des Enseignants
            </span>
          </NavLink>
        </MenuItem>
        <MenuItem
          icon="fas fa-calendar-alt"
          label="Événements"
          isCollapsed={isCollapsed}
          to={"/admin/events"}
        ></MenuItem>
        <MenuItem
          icon="fas fa-file-invoice"
          label="Factures"
          isCollapsed={isCollapsed}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices"
          >
            <i className="fas fa-file-invoice-dollar mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Liste des Factures
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices/create"
          >
            <i className="fas fa-file-invoice-dollar mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Créer Facture
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices/report"
          >
            <i className="fas fa-chart-line mr-3"></i>
            <span className={`${isCollapsed ? "hidden" : "block"} text-sm`}>
              Rapport Mensuel
            </span>
          </NavLink>
        </MenuItem>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
