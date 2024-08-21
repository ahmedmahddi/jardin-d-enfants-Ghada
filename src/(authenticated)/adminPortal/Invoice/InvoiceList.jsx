import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  fetchInvoices,
  fetchInvoiceById,
  markInvoiceAsPaid,
} from "../../api/Invoice/invoice.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "../../common/ConfirmationModal.jsx";
import InvoiceDetailsModal from "./InvoiceDetailsModal.jsx";
import usePagination from "../../../hooks/usePagination";
import useSort from "../../../hooks/useSort";
import useSearch from "../../../hooks/useSearch";
import useModal from "../../../hooks/useModal";

const ListeFactures = () => {
  const queryClient = useQueryClient();
  const {
    page,
    limit,
    totalCount,
    setTotalCount,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(1, 20);
  const [invoices, setInvoices] = useState([]);
  const { isModalOpen, modalMessage, modalAction, openModal, closeModal } =
    useModal();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const { sortedData, handleSort, getSortIcon } = useSort(invoices);
  const { filteredData, debouncedSetSearchQuery } = useSearch(sortedData);

  useEffect(() => {
    const loadInvoices = async () => {
      try {
        const data = await fetchInvoices(page, limit);
        setInvoices(data.invoices);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error("Erreur lors de la récupération des factures", error);
      }
    };
    loadInvoices();
  }, [page, limit, setTotalCount]);

  const updateStatusMutation = useMutation(markInvoiceAsPaid, {
    onSuccess: () => {
      queryClient.invalidateQueries("invoices");
    },
  });

  const handleUpdateStatus = invoiceId => {
    openModal(
      "Êtes-vous sûr de vouloir marquer cette facture comme payée?",
      () => updateStatusMutation.mutate(invoiceId)
    );
  };

  const handleViewInvoice = async invoiceID => {
    try {
      const invoice = await fetchInvoiceById(invoiceID);
      const selected = {
        ...invoice,
        invoiceID: invoice.invoiceID.toString(),
        issueDate: invoice.issueDate
          ? new Date(invoice.issueDate).toISOString().slice(0, 10)
          : "N/A",
        dueDate: invoice.dueDate
          ? new Date(invoice.dueDate).toISOString().slice(0, 10)
          : "N/A",
      };
      setSelectedInvoice(selected);
      setIsDetailsModalOpen(true);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails de la facture : ",
        error
      );
    }
  };

  if (!invoices) {
    return <div>Chargement...</div>;
  }

  if (!invoices) {
    return <div>Erreur lors de la récupération des factures</div>;
  }

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Liste des factures
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
              onClick={() => handleSort("parentEmail")}
            >
              Email du parent {getSortIcon("parentEmail")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("amount")}
            >
              Montant {getSortIcon("amount")}
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
          {filteredData.map((invoice, index) => (
            <tr
              key={invoice.invoiceID}
              className={`text-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              <td className="px-4 py-2">{invoice.childName}</td>
              <td className="px-4 py-2">{invoice.parentEmail}</td>
              <td className="px-4 py-2">${invoice.amount}</td>
              <td className="px-4 py-2">{invoice.status}</td>
              <td className="px-4 py-2 flex justify-around">
                <button
                  className="text-gray-500 hover:text-blue-500"
                  onClick={() => handleViewInvoice(invoice.invoiceID)}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                {invoice.status === "unpaid" && (
                  <button
                    className="text-gray-500 hover:text-green-500"
                    onClick={() => handleUpdateStatus(invoice.invoiceID)}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                )}
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
          Page {page} de {totalPages}
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
        <InvoiceDetailsModal
          isOpen={isDetailsModalOpen}
          invoice={selectedInvoice}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ListeFactures;
