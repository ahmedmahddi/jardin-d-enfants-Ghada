import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MenuItem = ({
  to,
  icon,
  label,
  isCollapsed,
  children,
  isOpen,
  toggleOpen,
}) => {
  const navigate = useNavigate();

  const handleToggle = () => {
    if (to) {
      navigate(to);
    } else {
      toggleOpen(label); // Handle submenu toggle
    }
  };

  return (
    <div className="mb-2">
      <div
        className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#89CFF0] rounded-lg cursor-pointer transition duration-300 ease-in-out"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={label}
      >
        <i
          className={`${icon} mr-3 text-lg text-[#2D3748]`}
          aria-hidden="true"
        ></i>
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } text-sm font-semibold text-[#4B5563]`}
        >
          {label}
        </span>
        {children && (
          <i
            className={`fas fa-chevron-${
              isOpen ? "down" : "right"
            } ml-auto text-[#2D3748]`}
            aria-hidden="true"
          ></i>
        )}
      </div>
      {isOpen && children && (
        <div className={`ml-4 ${isCollapsed ? "block" : "block"}`}>
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
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const Sidebar = ({ isCollapsed }) => {
  const [openMenu, setOpenMenu] = useState(""); // Track which menu is open

  const toggleOpen = label => {
    setOpenMenu(openMenu === label ? "" : label); // Toggle the current open menu
  };

  return (
    <div
      className={`bg-[#F4F4F9] h-full transition-all duration-300 shadow-lg rounded-lg ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4">
        <p className="text-gray-500 text-md mb-2 text-center border-b border-gray-100">
          Menu
        </p>

        {/* Tableau de bord */}
        <MenuItem
          icon="fas fa-tachometer-alt"
          label="Tableau de bord"
          isCollapsed={isCollapsed}
          to="/admin"
          isOpen={openMenu === "Tableau de bord"}
          toggleOpen={toggleOpen}
        />

        {/* Inscriptions */}
        <MenuItem
          icon="fas fa-book"
          label="Inscriptions"
          isCollapsed={isCollapsed}
          to="/admin/enrollments/list"
          isOpen={openMenu === "Inscriptions"}
          toggleOpen={toggleOpen}
        />

        {/* Enfants */}
        <MenuItem
          icon="fas fa-user-graduate"
          label="Enfants"
          isCollapsed={isCollapsed}
          isOpen={openMenu === "Enfants"}
          toggleOpen={toggleOpen}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/children/add"
          >
            <i className="fas fa-plus mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Ajouter Enfant
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/children/list"
          >
            <i className="fas fa-list mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Liste des Enfants
            </span>
          </NavLink>
        </MenuItem>

        {/* Enseignants */}
        <MenuItem
          icon="fas fa-chalkboard-teacher"
          label="Enseignants"
          isCollapsed={isCollapsed}
          isOpen={openMenu === "Enseignants"}
          toggleOpen={toggleOpen}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/staff/add"
          >
            <i className="fas fa-plus mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Ajouter Enseignant
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/staff/list"
          >
            <i className="fas fa-list mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Liste des Enseignants
            </span>
          </NavLink>
        </MenuItem>

        {/* Événements */}
        <MenuItem
          icon="fas fa-calendar-alt"
          label="Événements"
          isCollapsed={isCollapsed}
          to="/admin/events"
          isOpen={openMenu === "Événements"}
          toggleOpen={toggleOpen}
        />

        {/* Factures */}
        <MenuItem
          icon="fas fa-file-invoice"
          label="Factures"
          isCollapsed={isCollapsed}
          isOpen={openMenu === "Factures"}
          toggleOpen={toggleOpen}
        >
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices"
          >
            <i className="fas fa-file-invoice mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Liste des Factures
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices/create"
          >
            <i className="fas fa-file-invoice-dollar mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
              Créer Facture
            </span>
          </NavLink>
          <NavLink
            className="flex items-center p-3 my-2 text-gray-700 hover:bg-[#FAD4D8] rounded-lg transition duration-300 ease-in-out"
            to="/admin/invoices/report"
          >
            <i className="fas fa-chart-line mr-3"></i>
            <span
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sm text-[#4B5563]`}
            >
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
