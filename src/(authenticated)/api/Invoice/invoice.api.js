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
      return response.data.children;
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

const fetchInvoices = async (page = 1, limit = 10) => {
  const response = await axiosInstance.get(
    `invoices/all?page=${page}&limit=${limit}`
  );
  console.log(response.data);
  return response.data;
};

const fetchInvoiceById = async invoiceID => {
  const response = await axiosInstance.get(`invoices/${invoiceID}`);
  return response.data;
};

const createInvoice = async invoiceData => {
  const response = await axiosInstance.post("invoices", invoiceData);
  return response.data;
};

const markInvoiceAsPaid = async invoiceID => {
  const response = await axiosInstance.put(`invoices/${invoiceID}/pay`);
  return response.data;
};

const generateReport = async () => {
  const response = await axiosInstance.get("invoices/report");
  return response.data;
};

export {
  fetchInvoices,
  fetchInvoiceById,
  createInvoice,
  markInvoiceAsPaid,
  generateReport,
};
