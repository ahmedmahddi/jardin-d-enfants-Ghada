import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { deleteEvent } from "../../api/Event/event.api";

const EventModal = ({ event, onClose }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(() => deleteEvent(event.id), {
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      onClose(); // Close modal after deletion
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleUpdate = () => {
    navigate(`/admin/events/update/${event.id}`);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full sm:w-auto p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Détails de l'événement
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Titre: {event.title}</p>
            <p className="text-sm text-gray-500">
              Description: {event.description}
            </p>
            <p className="text-sm text-gray-500">
              Début: {moment(event.start).format("LLL")}
            </p>
            <p className="text-sm text-gray-500">
              Fin: {moment(event.end).format("LLL")}
            </p>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Supprimer
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Modifier
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EventModal.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventModal;
