import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { fetchStaff, deleteStaff } from "../../api/Staff/staff.api.js";
import ViewStaffModal from "./ViewStaff";
import UpdateStaffModal from "./UpdateStaff";
import ConfirmationModal from "../../common/ConfirmationModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Papa from "papaparse";
import usePagination from "../../../hooks/usePagination";
import useSort from "../../../hooks/useSort";
import useSearch from "../../../hooks/useSearch";
import useModal from "../../../hooks/useModal";

const StaffList = () => {
  const queryClient = useQueryClient();

  const {
    page,
    limit,
    totalCount,
    setTotalCount,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(1, 20);
  const [staff, setStaff] = useState([]);
  const { isModalOpen, modalMessage, modalAction, openModal, closeModal } =
    useModal();
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const { sortedData, handleSort, getSortIcon } = useSort(staff);
  const { filteredData, debouncedSetSearchQuery } = useSearch(sortedData);

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const data = await fetchStaff(page, limit);
        setStaff(data.staffList);
        setTotalCount(data.totalItems);
      } catch (error) {
        console.error("Erreur lors de la récupération des inscriptions", error);
      }
    };
    loadStaff();
  }, [page, limit, setTotalCount]);

  const deleteMutation = useMutation(deleteStaff, {
    onSuccess: () => {
      queryClient.invalidateQueries("staff");
    },
  });

  const handleDelete = staffId => {
    openModal(
      "Êtes-vous sûr de vouloir supprimer ce membre du personnel?",
      () => deleteMutation.mutate(staffId)
    );
  };

  const handleView = staff => {
    setSelectedStaff(staff);
    setIsViewModalOpen(true);
  };

  const handleUpdate = staff => {
    setSelectedStaff(staff);
    setIsUpdateModalOpen(true);
  };

  const handleDownload = () => {
    const csv = Papa.unparse(filteredData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `LISTEDU_PERSONNEL-${new Date().getFullYear()}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Liste du Personnel
      </h1>
      <div className="flex justify-end">
        <button
          className="bg-orange-500 text-white rounded px-4 py-2 mr-2 mb-4"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Télécharger
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          className="border rounded w-full py-2 px-4 mr-2"
          onChange={e => debouncedSetSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Nom et Prénom {getSortIcon("name")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("position")}
            >
              Poste {getSortIcon("position")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email {getSortIcon("email")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("phone")}
            >
              Téléphone {getSortIcon("phone")}
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((staff, index) => (
            <tr
              key={staff.id}
              className={`text-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              <td className="px-4 py-2">{staff.name}</td>
              <td className="px-4 py-2">{staff.position}</td>
              <td className="px-4 py-2">{staff.email}</td>
              <td className="px-4 py-2">{staff.phone}</td>
              <td className="px-4 py-2 flex justify-around">
                <button
                  className="text-gray-500 hover:text-blue-500"
                  onClick={() => handleView(staff)}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  className="text-gray-500 hover:text-green-500"
                  onClick={() => handleUpdate(staff)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => handleDelete(staff.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Précédent
        </button>
        <span>
          Page {page} sur {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Suivant
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        message={modalMessage}
        onConfirm={() => {
          modalAction();
          closeModal();
        }}
        onCancel={closeModal}
      />
      {isViewModalOpen && selectedStaff && (
        <ViewStaffModal
          staff={selectedStaff}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
      {isUpdateModalOpen && selectedStaff && (
        <UpdateStaffModal
          staff={selectedStaff}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
    </div>
  );
};

export default StaffList;
