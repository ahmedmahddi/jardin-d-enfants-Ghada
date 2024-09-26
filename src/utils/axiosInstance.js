import axios from "axios";

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://jardindenfantghada.com/api/"
      : "http://localhost:5000/api/",
  withCredentials: true, // Send cookies with requests
});
let cachedCsrfToken = null;

// Function to get CSRF token and cache it
export const getCsrfToken = async () => {
  if (cachedCsrfToken) return cachedCsrfToken; // Use cached token
  const response = await axiosInstance.get("/csrf-token");
  cachedCsrfToken = response.data.csrfToken;
  return cachedCsrfToken;
};

axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add CSRF token for data-modifying requests
    if (["post", "put", "patch", "delete"].includes(config.method)) {
      if (!cachedCsrfToken) {
        try {
          const csrfToken = await getCsrfToken();
          cachedCsrfToken = csrfToken; // Cache the CSRF token
        } catch (error) {
          console.error("Failed to fetch CSRF token:", error);
        }
      }
      config.headers["CSRF-Token"] = cachedCsrfToken;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // Redirect to login page if unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
