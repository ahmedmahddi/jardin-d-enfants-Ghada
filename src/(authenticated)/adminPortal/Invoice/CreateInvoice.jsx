import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useMutation, useQueryClient } from "react-query";
import { createInvoice, fetchChildren } from "../../api/Invoice/invoice.api";
import Notification from "../../common/Notification";
import InvoiceDetailsModal from "./InvoiceDetailsModal";
import usePagination from "../../../hooks/usePagination";

const CreateInvoice = () => {
  const [childId, setChildId] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [amount, setAmount] = useState("");
  const [childrenOptions, setChildrenOptions] = useState([]);
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [showInvoiceDetails, setShowInvoiceDetails] = useState(false);
  const queryClient = useQueryClient();
  const { page, limit } = usePagination(1, 250);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const childrenData = await fetchChildren(page, limit);
        console.log("Children data:", childrenData);
        if (Array.isArray(childrenData)) {
          setChildren(childrenData);
          setChildrenOptions(
            childrenData.map(child => ({
              value: child.id,
              label: `${child.childName} (Parent: ${child.parentEmail})`,
            }))
          );
          // Assuming your API returns total count of items
        } else {
          setNotificationMessage("Unexpected response format from server");
          setNotificationType("error");
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
        }
      } catch (error) {
        setNotificationMessage(`Failed to load children: ${error.message}`);
        setNotificationType("error");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    };

    loadOptions();
  }, [page, limit]);

  const mutation = useMutation(createInvoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("invoices");
      setChildId(null);
      setParentId(null);
      setAmount("");
      setShowNotification(true);
      setNotificationMessage("Facture créée avec succès!");
      setNotificationType("success");
      setTimeout(() => setShowNotification(false), 3000);
    },
    onError: error => {
      setNotificationMessage(`Erreur : ${error.message}`);
      setNotificationType("error");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    },
  });

  const handleChildChange = selectedOption => {
    setChildId(selectedOption);
    const selectedChild = children.find(
      child => child.id === selectedOption.value
    );
    setSelectedChild(selectedChild);
    if (selectedChild) {
      setParentId({
        value: selectedChild.parentId,
        label: selectedChild.parentName,
      });
    }
  };

  const handleSubmit = () => {
    mutation.mutate({
      childId: childId?.value,
      parentId: parentId?.value,
      amount,
    });
  };

  const handlePreview = () => {
    setShowInvoiceDetails(true);
  };

  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(currentDate.getDate() + 15);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-orange-500">
          Créer une facture
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="child-select"
              className="block text-sm font-medium text-gray-700"
            >
              Nom de l'enfant
            </label>
            <Select
              id="child-select"
              value={childId}
              onChange={handleChildChange}
              options={childrenOptions}
              className="mt-1 block w-full"
              styles={{
                control: provided => ({
                  ...provided,
                  borderColor: "#0E1E2B",
                }),
              }}
            />
          </div>
          <div>
            <label
              htmlFor="parent-select"
              className="block text-sm font-medium text-gray-700"
            >
              Nom du parent
            </label>
            <Select
              id="parent-select"
              value={parentId}
              onChange={setParentId}
              options={
                parentId
                  ? [{ value: parentId.value, label: parentId.label }]
                  : []
              }
              className="mt-1 block w-full"
              isDisabled
              styles={{
                control: provided => ({
                  ...provided,
                  borderColor: "#0E1E2B",
                }),
              }}
            />
          </div>
          <div>
            <label
              htmlFor="amount-input"
              className="block text-sm font-medium text-gray-700"
            >
              Montant
            </label>
            <input
              id="amount-input"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-lg"
              style={{ borderColor: "#0E1E2B" }}
            />
          </div>
          <button
            type="button"
            onClick={handlePreview}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Aperçu de la facture
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Créer une facture
          </button>
        </form>

        {showNotification && (
          <Notification
            message={notificationMessage}
            type={notificationType}
            onClose={() => setShowNotification(false)}
          />
        )}

        <InvoiceDetailsModal
          isOpen={showInvoiceDetails}
          invoice={{
            invoiceID: "12345",
            issueDate: currentDate.toLocaleDateString(),
            dueDate: dueDate.toLocaleDateString(),
            parentName: selectedChild?.parentName || "",
            parentPhone: selectedChild?.parentPhone || "",
            parentEmail: selectedChild?.parentEmail || "",
            amount: parseFloat(amount),
            childName: selectedChild?.childName || "",
          }}
          onClose={() => setShowInvoiceDetails(false)}
        />

        {/* <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={handlePreviousPage}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            disabled={page * limit >= totalCount}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CreateInvoice;
