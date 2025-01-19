import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    // baseURL: "https://lms-backend-production-0f6d.up.railway.app/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Tambahkan interceptor untuk JWT
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
