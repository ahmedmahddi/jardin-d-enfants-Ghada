import React, { useState, useEffect, useCallback } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";
import { isSameMonth, isSameDay } from "date-fns";

const UpcomingEvents = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventsForSelectedDay, setEventsForSelectedDay] = useState([]);

  const filterEventsByMonth = useCallback(
    date => {
      const filtered = events.filter(event =>
        isSameMonth(new Date(event.date), date)
      );
      setFilteredEvents(filtered);
    },
    [events]
  );

  const filterEventsByDay = useCallback(
    date => {
      const filtered = events.filter(event =>
        isSameDay(new Date(event.date), date)
      );
      setEventsForSelectedDay(filtered);
    },
    [events]
  );

  useEffect(() => {
    filterEventsByMonth(selectedDate);
    filterEventsByDay(selectedDate);
  }, [selectedDate, events, filterEventsByMonth, filterEventsByDay]);

  const onDateChange = date => {
    setSelectedDate(date);
  };

  const formatEvent = event => {
    const eventDate = new Date(event.date);
    const options = { weekday: "short", day: "numeric", month: "short" };
    return eventDate.toLocaleDateString(undefined, options);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const hasEvent = filteredEvents.some(event =>
        isSameDay(new Date(event.date), date)
      );
      return hasEvent ? "react-calendar__tile--has-event" : "";
    }
    return "";
  };

  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md h-full flex flex-col">
      <h2 className="text-md lg:text-xl font-semibold mb-4">
        Événements à venir
      </h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <div className="mt-4 flex-grow overflow-y-auto">
        {eventsForSelectedDay.length > 0 ? (
          eventsForSelectedDay.map(event => (
            <div
              key={event.id}
              className="mb-4 p-4 border rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-semibold">
                    {formatEvent(event)}
                  </div>
                  <div className="text-md font-bold">{event.name}</div>
                  <div className="text-sm text-gray-600">
                    {event.description}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    {event.startTime} - {event.endTime}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            Pas d'événements pour ce jour.
          </p>
        )}
      </div>
    </div>
  );
};

UpcomingEvents.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string,
      startTime: PropTypes.string,
      endTime: PropTypes.string,
    })
  ).isRequired,
};

export default UpcomingEvents;
