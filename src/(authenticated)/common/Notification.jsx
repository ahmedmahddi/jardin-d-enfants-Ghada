import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message, type, onClose }) => (
  <div
    className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white`}
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-4">
      X
    </button>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
