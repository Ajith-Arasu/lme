import axios, { AxiosError } from "axios";

// -----------------------------
// Load Environment Variables
// -----------------------------
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("BASE_URL==>",BASE_URL)
const TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT ?? 20000);

// -----------------------------
// Create Axios Instance
// -----------------------------
const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// -----------------------------
// Request Interceptor
// -----------------------------
api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token");

    // Ensure headers exist
    config.headers = config.headers || {};

    // Always send x-key
    // config.headers["x-key"] = "f92ad1c73b8e4ed0a6c135d3e4f4e4b5";

    // Add token only if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// -----------------------------
// Response Interceptor
// -----------------------------
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    // Handle 401 Unauthorized (Token Expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) {
          logoutUser();
          return Promise.reject(error);
        }

        const refreshResponse = await axios.post(
          `${BASE_URL}/auth/refresh`,
          { refreshToken }
        );

        const newAccessToken = refreshResponse.data?.accessToken;

        localStorage.setItem("access_token", newAccessToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshErr) {
        logoutUser();
        return Promise.reject(refreshErr);
      }
    }

    // Other errors
    return Promise.reject(error);
  }
);

// -----------------------------
// Logout Handler
// -----------------------------
function logoutUser() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "/login";
}

// -----------------------------
// Export API Instance
// -----------------------------
export default api;
