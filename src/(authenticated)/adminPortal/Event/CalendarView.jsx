import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useQuery } from "react-query";
import moment from "moment";
import { fetchEvents } from "../../api/Event/event.api";
import EventModal from "./EventModal";
import AddEvent from "./addEvent";

const CalendarView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const { data: events, isLoading, error } = useQuery("events", fetchEvents);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur de chargement des événements</div>;

  const handleEventClick = clickInfo => {
    setSelectedEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
    });
    setModalOpen(true);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded max-w-full">
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
            <div className="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full sm:w-auto p-6">
              <AddEvent />
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setAddEventOpen(false)}
                  className="mt-3 w-full sm:w-auto bg-gray-300 text-black rounded hover:bg-gray-400 px-4 py-2"
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
