import axiosInstance from "../../../utils/axiosInstance";

export const fetchStaff = async (page , limit) => {
  const response = await axiosInstance.get(
    `staff/?page=${page}&limit=${limit}`
  );
  return response.data;
};
export const createStaff = async staffData => {
  return await axiosInstance.post("staff/", staffData);
};

export const updateStaff = async (id, staffData) => {
  return await axiosInstance.put(`staff/${id}/`, staffData);
};
export const deleteStaff = async id => {
  return await axiosInstance.delete(`staff/${id}/`);
};

export const fetchStaffById = async id => {
  return await axiosInstance.get(`staff/${id}/`);
};
