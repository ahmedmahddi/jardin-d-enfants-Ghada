import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createEvent } from "../../api/Event/event.api";
import Notification from "../../common/Notification";

const AddEvent = () => {
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const mutation = useMutation(createEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      setNotification({
        message: "Événement créé avec succès",
        type: "success",
      });
      // Réinitialiser les champs du formulaire
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    },
    onError: () => {
      setNotification({
        message: "Erreur lors de la création de l'événement",
        type: "error",
      });
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formatDateToISO = dateString => {
    const date = new Date(dateString);
    return date.toISOString();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formattedStartDate = formatDateToISO(startDate);
    const formattedEndDate = formatDateToISO(endDate);
    mutation.mutate({
      title,
      description,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });
  };

  return (
    <div className="relative">
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "" })}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Ajouter un événement</h2>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="datetime-local"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          required
        />
        <input
          type="datetime-local"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded"
        >
          Ajouter l'événement
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
