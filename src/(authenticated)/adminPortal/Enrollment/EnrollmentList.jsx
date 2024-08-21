import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  fetchEnrollments,
  updateEnrollmentStatus,
} from "../../api/Enrollment/enrollment.api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faEye } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "../../common/ConfirmationModal.jsx";
import EnrollmentDetailsModal from "./EnrollmentDetailsModal.jsx";
import usePagination from "../../../hooks/usePagination";
import useSort from "../../../hooks/useSort";
import useSearch from "../../../hooks/useSearch";
import useModal from "../../../hooks/useModal";

const EnrollmentList = () => {
  const queryClient = useQueryClient();

  const {
    page,
    limit,
    totalCount,
    setTotalCount,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(1, 20);
  const [enrollments, setEnrollments] = useState([]);
  const { isModalOpen, modalMessage, modalAction, openModal, closeModal } =
    useModal();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  const { sortedData, handleSort, getSortIcon } = useSort(enrollments);
  const { filteredData, debouncedSetSearchQuery } = useSearch(sortedData);

  useEffect(() => {
    const loadEnrollments = async () => {
      try {
        const data = await fetchEnrollments(page, limit);
        setEnrollments(data.enrollments);
        setTotalCount(data.totalItems);
      } catch (error) {
        console.error("Erreur lors de la récupération des inscriptions", error);
      }
    };
    loadEnrollments();
  }, [page, limit, setTotalCount]);

  const updateStatusMutation = useMutation(updateEnrollmentStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("enrollments");
    },
  });

  const handleUpdateStatus = (enrollmentId, status) => {
    openModal(
      `Êtes-vous sûr de vouloir ${
        status === "approved" ? "approuver" : "rejeter"
      } cette inscription ?`,
      () => updateStatusMutation.mutate({ id: enrollmentId, status })
    );
  };

  const handleViewEnrollment = enrollment => {
    setSelectedEnrollment(enrollment);
    setIsDetailsModalOpen(true);
  };

  if (!enrollments) {
    return <div>Chargement...</div>;
  }

  if (!enrollments) {
    return <div>Erreur lors de la récupération des inscriptions</div>;
  }

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Liste des inscriptions
      </h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom d'enfant..."
          className="border rounded w-full py-2 px-4 mr-2"
          onChange={e => debouncedSetSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("childName")}
            >
              Nom de l'enfant {getSortIcon("childName")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("parentName")}
            >
              Nom du parent {getSortIcon("parentName")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("parentEmail")}
            >
              Email du parent {getSortIcon("parentEmail")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Statut {getSortIcon("status")}
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((enrollment, index) => (
            <tr
              key={enrollment.id}
              className={`text-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              <td className="px-4 py-2">{enrollment.childName}</td>
              <td className="px-4 py-2">{enrollment.parentName}</td>
              <td className="px-4 py-2">{enrollment.parentEmail}</td>
              <td className="px-4 py-2">{enrollment.status}</td>
              <td className="px-4 py-2 flex justify-around">
                <button
                  className="text-gray-500 hover:text-blue-500"
                  onClick={() => handleViewEnrollment(enrollment)}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  className="text-gray-500 hover:text-green-500"
                  onClick={() => handleUpdateStatus(enrollment.id, "approved")}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => handleUpdateStatus(enrollment.id, "rejected")}
                >
                  <FontAwesomeIcon icon={faTimes} />
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
      {isDetailsModalOpen && (
        <EnrollmentDetailsModal
          isOpen={isDetailsModalOpen}
          enrollment={selectedEnrollment}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default EnrollmentList;
