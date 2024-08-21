import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PropTypes from "prop-types";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchEvents, deleteEvent } from "../../api/Event/event.api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AddEvent from "./addEvent"; // Assurez-vous que ce chemin d'importation est correct

const EventModal = ({ event, onClose }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(() => deleteEvent(event.id), {
    onSuccess: () => {
      queryClient.invalidateQueries("events");
      onClose(); // Fermer la fenêtre après suppression
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
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
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
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleDelete}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Supprimer
            </button>
            <button
              onClick={handleUpdate}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Modifier
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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

const CalendarView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const { data: events, isLoading, error } = useQuery("events", fetchEvents);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur de chargement des événements</div>;

  const handleEventClick = clickInfo => {
    setSelectedEvent({
      id: clickInfo.event.id, // Assurez-vous que l'objet événement a un id
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
    });
    setModalOpen(true);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Calendrier des événements</h2>
        <button
          onClick={() => setAddEventOpen(true)}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter un événement
        </button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events.map(event => ({
          id: event.id,
          title: event.title,
          start: moment(event.startDate).toISOString(),
          end: moment(event.endDate).toISOString(),
          description: event.description,
        }))}
        eventClick={handleEventClick}
      />
      {modalOpen && (
        <EventModal event={selectedEvent} onClose={() => setModalOpen(false)} />
      )}
      {addEventOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <AddEvent />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setAddEventOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
