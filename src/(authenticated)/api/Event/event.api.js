import axiosInstance from "../../../utils/axiosInstance";

export const fetchEvents = async () => {
  const response = await axiosInstance.get("events/");
  return response.data;
};

export const createEvent = async eventData => {
  return await axiosInstance.post("events/", eventData);
};

export const updateEvent = async (id, eventData) => {
  return await axiosInstance.put(`events/${id}/`, eventData);
};

export const deleteEvent = async id => {
  return await axiosInstance.delete(`events/${id}/`);
};

export const fetchEventById = async id => {
  return await axiosInstance.get(`events/${id}/`);
};
