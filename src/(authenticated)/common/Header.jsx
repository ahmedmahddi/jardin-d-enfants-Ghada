import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import avatarpic from "../assets/images/avatar-placeholder.png";
import logo from "../assets/images/logo-JDG.png";
import { AuthContext } from "../../contexts/AuthContext";

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
        className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-300 rounded-lg z-50"
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
  const { logout } = useContext(AuthContext);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event, toggle) => {
    if (event.key === "Escape") {
      toggle();
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} aria-label="Toggle sidebar">
          <i className="fas fa-bars text-xl text-orange-500"></i>
        </button>
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          {!isCollapsed && (
            <h1 className="text-base font-semibold text-orange-500 hidden lg:block">
              Jardin d'enfant Ghada
            </h1>
          )}
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Dropdown
          isOpen={isNotificationsOpen}
          toggle={() => setIsNotificationsOpen(!isNotificationsOpen)}
          refElement={notificationsRef}
        >
          {{
            button: (
              <i
                className="fas fa-bell text-xl cursor-pointer"
                aria-label="Notifications"
                aria-expanded={isNotificationsOpen}
              ></i>
            ),
            content: (
              <>
                <div
                  className="p-4 border-b border-gray-300 flex justify-between items-center"
                  role="menuitem"
                >
                  <h4 className="text-lg font-semibold">Notifications</h4>
                  <button className="text-blue-500 text-sm">CLEAR ALL</button>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  <div className="p-4 border-b border-gray-300" role="menuitem">
                    <p className="text-sm">
                      Carlson Tech has approved your estimate
                    </p>
                    <span className="text-xs text-gray-500">4 mins ago</span>
                  </div>
                  {/* Add more notification items here */}
                </div>
                <div className="p-4 text-center text-blue-500">
                  <button>View all Notifications</button>
                </div>
              </>
            ),
          }}
        </Dropdown>
        <Dropdown
          isOpen={isProfileOpen}
          toggle={() => setIsProfileOpen(!isProfileOpen)}
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
                <span className="hidden lg:block">Ryan Taylor</span>
                <i className="fas fa-chevron-down ml-2"></i>
              </div>
            ),
            content: (
              <>
                <div className="p-4 border-b border-gray-300" role="menuitem">
                  <div className="flex items-center">
                    <img
                      src={avatarpic}
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">Ryan Taylor</h4>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full text-left text-sm" role="menuitem">
                    My Profile
                  </button>
                  <button
                    className="w-full text-left text-sm mt-2"
                    role="menuitem"
                  >
                    Inbox
                  </button>
                  <button
                    className="w-full text-left text-sm mt-2"
                    role="menuitem"
                  >
                    Settings
                  </button>
                  <button
                    className="w-full text-left text-sm mt-2"
                    onClick={logout}
                    role="menuitem"
                  >
                    Logout
                  </button>
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
