<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
                Create an Account
            </h1>
            <form @submit.prevent="register">
                <!-- Name -->
                <div class="mb-4">
                    <label
                        for="name"
                        class="block text-sm font-medium text-gray-600 mb-2"
                        >Full Name</label
                    >
                    <input
                        v-model="name"
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                <!-- Email -->
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

                <!-- Password -->
                <div class="mb-4">
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

                <!-- User Role -->
                <div class="mb-6">
                    <label
                        for="role"
                        class="block text-sm font-medium text-gray-600 mb-2"
                        >I am a:</label
                    >
                    <select
                        v-model="role"
                        id="role"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="STUDENT">Student</option>
                        <option value="INSTRUCTOR">Instructor</option>
                    </select>
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Register
                </button>
            </form>
            <p class="text-sm text-gray-500 text-center mt-6">
                Already have an account?
                <router-link to="/login" class="text-blue-500 hover:underline"
                    >Login here</router-link
                >
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import api from "../api"; // Pastikan api di-set up dengan Axios
import { useRouter } from "vue-router";

export default {
    setup() {
        const name = ref("");
        const email = ref("");
        const password = ref("");
        const role = ref("STUDENT");
        const router = useRouter();

        const register = async () => {
            try {
                const payload = {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    role: role.value,
                };

                const endpoint =
                    role.value === "STUDENT"
                        ? "/auth/register"
                        : "/auth/register-instructor";

                // Mengirim request
                const { data } = await api.post(endpoint, payload);

                console.log("Registration successful:", data);
                router.push("/login"); // Redirect ke halaman login setelah registrasi sukses
            } catch (error) {
                console.error(
                    "Registration failed:",
                    error.response?.data || error.message
                );
            }
        };

        return { name, email, password, role, register };
    },
};
</script>
<style scoped>
/* Additional styling, if needed, can go here */
</style>
