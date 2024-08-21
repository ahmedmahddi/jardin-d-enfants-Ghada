import axiosInstance from "../../../utils/axiosInstance";

export const fetchEnrollments = async (page, limit) => {
  const response = await axiosInstance.get(
    `enrollments/?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const updateEnrollmentStatus = async ({ id, status }) => {
  return await axiosInstance.patch(`enrollments/${id}/status`, { status });
};
