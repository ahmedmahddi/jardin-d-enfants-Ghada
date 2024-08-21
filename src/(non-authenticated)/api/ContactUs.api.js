import axiosInstance from "../../utils/axiosInstance";

export const createContact = async contactData => {
  return await axiosInstance.post("contact/", contactData);
};
