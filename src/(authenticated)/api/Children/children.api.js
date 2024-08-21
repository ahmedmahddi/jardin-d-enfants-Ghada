import axiosInstance from "../../../utils/axiosInstance";


export const fetchChildren = async (page, limit) => {
  try {
    const response = await axiosInstance.get(
      `children/?page=${page}&limit=${limit}`
    );
    console.log("API response:", response.data); // Log the response
    if (
      response.data &&
      response.data.children &&
      Array.isArray(response.data.children)
    ) {
      return response.data;
    } else {
      console.error("Unexpected response format:", response.data);
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
    throw error;
  }
};

export const createChild = async child => {
  return await axiosInstance.post("children/", child);
};

export const updateChild = async (id, child) => {
  return await axiosInstance.put(`children/${id}`, child);
};

export const deleteChild = async id => {
  return await axiosInstance.delete(`children/${id}`);
};

export const getChildById = async id => {
  return await axiosInstance.get(`children/${id}`);
};
