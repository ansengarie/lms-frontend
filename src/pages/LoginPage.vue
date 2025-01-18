<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
                Welcome Back!
            </h1>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-600 mb-2"
                        >Email Address</label
                    >
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                <div class="mb-6">
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-600 mb-2"
                        >Password</label
                    >
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Login
                </button>
            </form>
            <p class="text-sm text-gray-500 text-center mt-6">
                Don't have an account?
                <router-link
                    to="/register"
                    class="text-blue-500 hover:underline"
                    >Sign Up</router-link
                >
            </p>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"; // Import ref
import { useAuthStore } from "../store/auth"; // Import auth store
import { useRouter } from "vue-router";

export default {
    setup() {
        // Gunakan ref untuk email dan password
        const email = ref("");
        const password = ref("");
        const authStore = useAuthStore();
        const router = useRouter();

        const login = async () => {
            try {
                // Gunakan nilai email.value dan password.value
                await authStore.login({
                    email: email.value,
                    password: password.value,
                });
                router.push("/dashboard");
                console.log("Login successful!");
            } catch (error) {
                console.error("Login failed:", error);
            }
        };

        return { email, password, login };
    },
};
</script>
