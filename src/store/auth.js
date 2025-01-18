import { defineStore } from "pinia";
import api from "../api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        async login(credentials) {
            const { data } = await api.post("/auth/login", credentials);
            this.token = data.token;
            this.user = data.user;
            localStorage.setItem("token", data.token);
        },
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem("token");
        },
    },
});
