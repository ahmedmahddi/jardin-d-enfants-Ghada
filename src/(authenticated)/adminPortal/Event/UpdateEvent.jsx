import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchEventById, updateEvent } from "../../api/Event/event.api";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: event,
    isLoading,
    error,
  } = useQuery(["event", id], () => fetchEventById(id));

  const mutation = useMutation(newData => updateEvent(id, newData), {
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      navigate("/admin/events");
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      if (event.startDate) {
        setStartDate(event.startDate.slice(0, -1)); // Supprimer le 'Z' final pour éviter les problèmes de fuseau horaire
      }
      if (event.endDate) {
        setEndDate(event.endDate.slice(0, -1));
      }
    }
  }, [event]);

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

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur de chargement de l'événement</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Mettre à jour l'événement</h2>
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
        Mettre à jour l'événement
      </button>
    </form>
  );
};

export default UpdateEvent;
