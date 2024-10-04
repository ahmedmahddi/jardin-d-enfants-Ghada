import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { fetchChildren, deleteChild } from "../../api/Children/children.api.js";
import ViewChildModal from "./ViewChild";
import UpdateChildModal from "./UpdateChild";
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

const ChildrenList = () => {
  const queryClient = useQueryClient();

  const {
    page,
    limit,
    totalCount,
    setTotalCount,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(1, 20);
  const [children, setChildren] = useState([]);
  const { isModalOpen, modalMessage, modalAction, openModal, closeModal } =
    useModal();
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);

  const { sortedData, handleSort, getSortIcon } = useSort(children);
  const { filteredData, debouncedSetSearchQuery } = useSearch(sortedData);

  useEffect(() => {
    const loadChildren = async () => {
      try {
        const data = await fetchChildren(page, limit);
        setChildren(data.children);
        setTotalCount(data.totalItems);
      } catch (error) {
        console.error("Erreur lors de la récupération des enfants", error);
      }
    };
    loadChildren();
  }, [page, limit, setTotalCount]);

  const deleteMutation = useMutation(deleteChild, {
    onSuccess: () => {
      queryClient.invalidateQueries("children");
      const loadChildren = async () => {
        try {
          const data = await fetchChildren(page, limit);
          setChildren(data.children);
          setTotalCount(data.totalItems);
        } catch (error) {
          console.error("Erreur lors de la récupération des enfants", error);
        }
      };
      loadChildren();
    },
  });

  const handleDelete = childId => {
    openModal("Êtes-vous sûr de vouloir supprimer cet enfant?", () =>
      deleteMutation.mutate(childId)
    );
  };

  const handleView = child => {
    setSelectedChild(child);
    setIsViewModalOpen(true);
  };

  const handleUpdate = child => {
    setSelectedChild(child);
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
      `LISTEDESENFANTS-${new Date().getFullYear()}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;

  return (
    <div className="max-w-full mx-auto p-4 bg-white shadow-lg rounded-md sm:p-6 md:p-8 lg:max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
        Liste des Enfants
      </h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-orange-500 text-white rounded px-4 py-2 text-sm md:text-base"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Télécharger
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          className="border rounded w-full py-2 px-4 text-sm"
          onChange={e => debouncedSetSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("childName")}
              >
                Nom et Prénom {getSortIcon("childName")}
              </th>
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("birthdate")}
              >
                Date de Naissance {getSortIcon("birthdate")}
              </th>
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("parentName")}
              >
                Nom du Parent {getSortIcon("parentName")}
              </th>
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("parentPhone")}
              >
                Téléphone du Parent {getSortIcon("parentPhone")}
              </th>
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("address")}
              >
                Adresse {getSortIcon("address")}
              </th>
              <th
                className="px-2 md:px-4 py-2 cursor-pointer"
                onClick={() => handleSort("medications")}
              >
                Médications {getSortIcon("medications")}
              </th>
              <th className="px-2 md:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((child, index) => (
              <tr
                key={child.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-2 md:px-4 py-2">{child.childName}</td>
                <td className="px-2 md:px-4 py-2">
                  {new Date(child.birthdate).toLocaleDateString()}
                </td>
                <td className="px-2 md:px-4 py-2">{child.parentName}</td>
                <td className="px-2 md:px-4 py-2">{child.parentPhone}</td>
                <td className="px-2 md:px-4 py-2">{child.address}</td>
                <td className="px-2 md:px-4 py-2">{child.medications}</td>
                <td className="px-2 md:px-4 py-2 flex justify-around">
                  <button
                    className="text-gray-500 hover:text-blue-500"
                    onClick={() => handleView(child)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-green-500"
                    onClick={() => handleUpdate(child)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => handleDelete(child.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-4 items-center">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 mb-2 sm:mb-0"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Précédent
        </button>
        <span className="text-sm">
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
      {isViewModalOpen && selectedChild && (
        <ViewChildModal
          child={selectedChild}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
      {isUpdateModalOpen && selectedChild && (
        <UpdateChildModal
          child={selectedChild}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ChildrenList;
