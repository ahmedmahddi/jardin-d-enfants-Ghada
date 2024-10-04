import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import avatarpic from "../assets/images/avatar-placeholder.png";
import logo from "../assets/images/logo-JDG.png";
import { AuthContext } from "../../contexts/AuthContext";
import AddNew from "./AddNew"; // Import AddNew Component

const Dropdown = ({ isOpen, toggle, children, refElement }) => (
  <div className="relative" ref={refElement}>
    <button
      onClick={toggle}
      className="focus:outline-none"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {children.button}
    </button>
    {isOpen && (
      <div
        className="absolute right-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-lg z-50"
        role="menu"
      >
        {children.content}
      </div>
    )}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.shape({
    button: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  }).isRequired,
  refElement: PropTypes.object.isRequired,
};

const Header = ({ toggleSidebar, isCollapsed }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);
  const addMenuRef = useRef(null);

  // Close all dropdowns if clicked outside or on another button
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target) &&
        addMenuRef.current &&
        !addMenuRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
        setIsNotificationsOpen(false);
        setIsAddMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-[#F4F4F9] shadow-md rounded-b-lg">
      {/* Left Section with Sidebar Toggle and Logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="text-xl text-[#2D3748]"
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          {!isCollapsed && (
            <h1 className="text-sm md:text-base font-semibold text-[#4B5563] hidden lg:block">
              Jardin d'enfant Ghada
            </h1>
          )}
        </Link>
      </div>

      {/* Right Section with Dropdowns */}
      <div className="flex items-center space-x-4">
        {/* Add/Create Dropdown */}
        <Dropdown
          isOpen={isAddMenuOpen}
          toggle={() => {
            setIsAddMenuOpen(!isAddMenuOpen);
            setIsProfileOpen(false);
            setIsNotificationsOpen(false);
          }}
          refElement={addMenuRef}
        >
          {{
            button: (
              <button
                className="text-xl text-[#2D3748]"
                aria-label="Create/Add"
              >
                <i className="fas fa-plus"></i>
              </button>
            ),
            content: <AddNew />, // Display AddNew component in the dropdown
          }}
        </Dropdown>

        {/* Notifications Dropdown */}
        <Dropdown
          isOpen={isNotificationsOpen}
          toggle={() => {
            setIsNotificationsOpen(!isNotificationsOpen);
            setIsProfileOpen(false);
            setIsAddMenuOpen(false);
          }}
          refElement={notificationsRef}
        >
          {{
            button: (
              <i
                className="fas fa-bell text-xl cursor-pointer text-[#2D3748]"
                aria-label="Notifications"
              ></i>
            ),
            content: (
              <>
                <div
                  className="p-4 border-b border-gray-200 flex justify-between items-center"
                  role="menuitem"
                >
                  <h4 className="text-lg font-semibold text-[#4B5563]">
                    Notifications
                  </h4>
                  <div className="text-blue-500 text-sm cursor-pointer">
                    TOUT EFFACER
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200" role="menuitem">
                    <p className="text-sm">
                      Carlson Tech a approuvé votre estimation
                    </p>
                    <span className="text-xs text-gray-500">
                      il y a 4 minutes
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center text-blue-500 cursor-pointer">
                  Voir toutes les notifications
                </div>
              </>
            ),
          }}
        </Dropdown>

        {/* Profile Dropdown */}
        <Dropdown
          isOpen={isProfileOpen}
          toggle={() => {
            setIsProfileOpen(!isProfileOpen);
            setIsNotificationsOpen(false);
            setIsAddMenuOpen(false);
          }}
          refElement={profileRef}
        >
          {{
            button: (
              <div
                className="flex items-center cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isProfileOpen}
              >
                <img
                  src={avatarpic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="hidden lg:block text-[#4B5563]">
                  Serra Damak
                </span>
                <i className="fas fa-chevron-down ml-2 text-[#2D3748]"></i>
              </div>
            ),
            content: (
              <>
                <div className="p-4 border-b border-gray-200" role="menuitem">
                  <div className="flex items-center">
                    <img
                      src={avatarpic}
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#4B5563]">
                        Serra Damak
                      </h4>
                      <p className="text-xs text-gray-500">Directrice</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div
                    className="w-full text-left text-sm mt-2 cursor-pointer"
                    onClick={logout}
                    role="menuitem"
                  >
                    Déconnexion
                  </div>
                </div>
              </>
            ),
          }}
        </Dropdown>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default Header;
