import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { fetchEventById } from "../../api/Event/event.api.js";
import moment from "moment";
import { useParams } from "react-router-dom";

const ViewEvent = () => {
  const { id } = useParams();
  const {
    data: event,
    error,
    isLoading,
  } = useQuery(["event", id], () => fetchEventById(id));

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur de chargement de l'événement</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Détails de l'événement</h2>
      <div className="p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p>{event.description}</p>
        <p>Début: {moment(event.startDate).format("LLL")}</p>
        <p>Fin: {moment(event.endDate).format("LLL")}</p>
      </div>
    </div>
  );
};

ViewEvent.propTypes = {
  id: PropTypes.string,
};

export default ViewEvent;
