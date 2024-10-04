import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for icons

const AddNew = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Créer: </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Students Button */}
        <Link
          to="/admin/children/add"
          className="flex flex-col items-center justify-center p-6 bg-orange-100 hover:bg-orange-200 rounded-lg shadow-lg"
        >
          <i className="fas fa-graduation-cap text-3xl text-orange-500 mb-2"></i>
          <span className="text-sm font-semibold text-gray-700">Enfant</span>
        </Link>

        {/* Teachers Button */}
        <Link
          to="/admin/staff/add"
          className="flex flex-col items-center justify-center p-6 bg-green-100 hover:bg-green-200 rounded-lg shadow-lg"
        >
          <i className="fas fa-chalkboard-teacher text-3xl text-green-500 mb-2"></i>
          <span className="text-sm font-semibold text-gray-700">
            Enseignat
          </span>
        </Link>

        {/* Events Button */}
        <Link
          to="/admin/events/add"
          className="flex flex-col items-center justify-center p-6 bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-lg"
        >
          <i className="fas fa-calendar-alt text-3xl text-yellow-500 mb-2"></i>
          <span className="text-sm font-semibold text-gray-700">
            Événement
          </span>
        </Link>

        {/* Invoice Button */}
        <Link
          to="/admin/invoices/create"
          className="flex flex-col items-center justify-center p-6 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-lg"
        >
          <i className="fas fa-file-invoice text-3xl text-blue-500 mb-2"></i>
          <span className="text-sm font-semibold text-gray-700">
            Transaction
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AddNew;
