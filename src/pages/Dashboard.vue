<template>
    <div class="flex">
        <!-- Sidebar -->
        <aside class="sticky top-0 w-64 h-screen bg-white">
            <!-- Logo -->
            <div class="flex items-center p-8">
                <img
                    src="../assets/logo_adhivasindo.png"
                    alt="logo"
                    class="w-12"
                />
                <p class="text-2xl font-semibold">
                    adhivas<span class="text-[#005aa1]">indo </span>
                </p>
            </div>
            <!-- Navigation -->
            <nav
                class="bg-[#282545] text-white h-full p-4 rounded-tr-2xl overflow-hidden"
            >
                <ul class="space-y-4">
                    <li>
                        <div
                            class="flex items-center justify-between px-4 py-2 ml-4 bg-white rounded-lg"
                        >
                            <div class="flex items-center">
                                <font-awesome-icon
                                    :icon="['fas', 'border-all']"
                                    class="text-black"
                                />
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-black rounded"
                                >
                                    Dashboard
                                </a>
                            </div>
                            <font-awesome-icon
                                :icon="['far', 'star']"
                                class="text-yellow-300"
                            />
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon
                                :icon="['far', 'rectangle-list']"
                            />
                            <a href="#" class="block px-4 py-2 rounded">
                                Modul
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon :icon="['fas', 'user-group']" />
                            <a href="#" class="block px-4 py-2 rounded">
                                Peserta
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon :icon="['far', 'comments']" />
                            <a href="#" class="block px-4 py-2 rounded">
                                Group Chat
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon :icon="['far', 'user']" />
                            <a href="#" class="block px-4 py-2 rounded">
                                Pemateri
                            </a>
                        </div>
                    </li>
                    <hr
                        class="flex items-center border-gray-500 w-[85%] mx-auto"
                    />
                    <li>
                        <p
                            class="mt-10 mb-6 ml-3 text-sm font-medium uppercase"
                        >
                            Profile
                        </p>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon :icon="['fas', 'gear']" />
                            <a href="#" class="block px-4 py-2 rounded">
                                Settings
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon
                                :icon="['far', 'calendar-minus']"
                            />
                            <a href="#" class="block px-4 py-2 rounded">
                                Kalender
                            </a>
                        </div>
                    </li>
                    <hr class="border-gray-500 w-[85%] mx-auto" />
                    <li>
                        <div class="flex items-center ml-8">
                            <font-awesome-icon
                                :icon="['fas', 'power-off']"
                                class="w-3 h-3 p-1 text-white rounded-full bg-gradient-to-b from-orange-400 to-red-600"
                            />
                            <button
                                @click="handleLogout"
                                class="block px-4 py-2 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 overflow-y-hidden min-h-[1100px]">
            <!-- Header -->
            <header
                class="flex items-center justify-between px-6 pt-6 bg-white"
            >
                <h2 class="text-xl font-semibold uppercase">
                    Learning Management System
                </h2>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <font-awesome-icon
                            :icon="['fas', 'magnifying-glass']"
                            class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Search class ..."
                            class="px-4 py-2 pl-10 border border-gray-300 rounded-md w-80"
                        />
                    </div>
                    <div
                        class="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded"
                    >
                        <font-awesome-icon :icon="['far', 'bell']" />
                    </div>
                    <div
                        class="relative flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded"
                    >
                        <div
                            class="absolute w-2 h-2 bg-red-600 rounded-full top-[10px] right-2"
                        ></div>
                        <font-awesome-icon :icon="['far', 'envelope']" />
                    </div>
                </div>
            </header>
            <!-- Main Dashboard Content -->
            <div class="p-6">
                <!-- Highlight Section -->
                <section
                    class="p-6 mb-6 mt-7 text-white rounded-lg bg-gradient-to-b from-[#a28afd] from-10% to-[#6446fe] to-90%"
                >
                    <h3 class="text-xs font-medium text-yellow-400 uppercase">
                        Pemograman
                    </h3>
                    <h3 class="mb-2 mt-4 text-2xl font-semibold w-[60%]">
                        Pemrograman Frontend Modern dengan React dan Angular
                    </h3>
                    <p class="w-[60%] text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Possimus eos tenetur quae totam veritatis nam
                        saepe officiis, expedita enim. Amet repudiandae
                        cupiditate eos alias. Minus laboriosam esse accusantium
                        rerum exercitationem.
                    </p>
                    <div class="flex items-end justify-between">
                        <div class="flex justify-between text-sm w-80">
                            <div class="flex items-center space-x-2">
                                <font-awesome-icon :icon="['far', 'user']" />
                                <p>Pemateri: By Josep</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <font-awesome-icon
                                    :icon="['far', 'calendar-days']"
                                />
                                <p>14-06-2025</p>
                            </div>
                        </div>
                        <button
                            class="p-4 mt-4 font-semibold text-black uppercase bg-white rounded-md"
                        >
                            Mulai Learning
                        </button>
                    </div>
                </section>
                <!-- Kompetensi Section -->
                <h3 class="mb-4 text-lg font-semibold uppercase">
                    Modul Kompetensi
                </h3>
                <section class="grid grid-cols-3 gap-6 mb-6">
                    <div class="p-4">
                        <img
                            src="../assets/programming.jpg"
                            alt="Programming"
                            class="w-64 h-32 bg-white rounded-lg shadow"
                        />
                        <p class="my-4 text-xs font-semibold uppercase">
                            Materi Kompetensi
                        </p>
                        <div class="grid grid-cols-1 gap-2 text-[10px]">
                            <p class="w-3/4">
                                Pengembangan Frontend Modern dengan React dan
                                Angular
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-4/5">
                                Pengembangan API Bestandar Industri dengan
                                GraphQL dan REST
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-4/5">
                                Menerapkan Clean Code dan Desain Pattern dalam
                                Pengembangan Software
                            </p>
                        </div>
                    </div>
                    <div class="p-4">
                        <img
                            src="../assets/creative-marketing.jpg"
                            alt="Creative Marketing"
                            class="w-64 h-32 bg-white rounded-lg shadow"
                        />
                        <p class="my-4 text-xs font-semibold uppercase">
                            Materi Kompetensi
                        </p>
                        <div class="grid grid-cols-1 gap-2 text-[10px]">
                            <p class="w-5/6">
                                Storytelling dalam pemasaran mengubah Data
                                menjadi Cerita yang menginspirasi
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-5/6">
                                Pemasaran Viral: Bagaimana Menciptakan Konten
                                yang cepat menyebar
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-5/6">
                                Memaksimalkan User-Generated Content dalam
                                Strategi Pemasaran Kreatif
                            </p>
                        </div>
                    </div>
                    <div class="p-4">
                        <img
                            src="../assets/sdm.png"
                            alt="SDM"
                            class="w-64 h-32 bg-white rounded-lg shadow"
                        />
                        <p class="my-4 text-xs font-semibold uppercase">
                            Materi Kompetensi
                        </p>
                        <div class="grid grid-cols-1 gap-2 text-[10px]">
                            <p class="w-5/6">
                                Storytelling dalam pemasaran mengubah Data
                                menjadi Cerita yang menginspirasi
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-5/6">
                                Pemasaran Viral: Bagaimana Menciptakan Konten
                                yang cepat menyebar
                            </p>
                            <hr class="text-gray-500" />
                            <p class="w-5/6">
                                Memaksimalkan User-Generated Content dalam
                                Strategi Pemasaran Kreatif
                            </p>
                        </div>
                    </div>
                </section>
                <!-- Nilai Peserta Section -->
                <section class="p-4 overflow-hidden bg-white rounded-lg shadow">
                    <h4 class="mb-4 font-bold text-md">Nilai Peserta</h4>
                    <table class="w-full text-sm text-left">
                        <thead>
                            <tr>
                                <th class="pb-2 border-b">Rank</th>
                                <th class="pb-2 border-b">Name</th>
                                <th class="pb-2 border-b">Class</th>
                                <th class="pb-2 border-b">Modul</th>
                                <th class="pb-2 border-b">Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Add more rows here -->
                            <tr>
                                <td class="py-2">1</td>
                                <td class="py-2">Parja Faiza</td>
                                <td class="py-2">L1</td>
                                <td class="py-2">Pemrograman</td>
                                <td class="py-2">1,234</td>
                            </tr>
                            <!-- Add more rows here -->
                            <tr>
                                <td class="py-2">2</td>
                                <td class="py-2">Parja Faiza</td>
                                <td class="py-2">L1</td>
                                <td class="py-2">Pemrograman</td>
                                <td class="py-2">1,234</td>
                            </tr>
                            <!-- Add more rows here -->
                            <tr>
                                <td class="py-2">3</td>
                                <td class="py-2">Parja Faiza</td>
                                <td class="py-2">L1</td>
                                <td class="py-2">Pemrograman</td>
                                <td class="py-2">1,234</td>
                            </tr>
                            <!-- Add more rows here -->
                        </tbody>
                    </table>
                </section>
            </div>
        </main>

        <!-- Content Side -->
        <aside class="p-6 bg-white w-96">
            <div class="flex flex-col items-center justify-center mt-8">
                <div class="relative">
                    <a href="#">
                        <font-awesome-icon
                            :icon="['fas', 'gear']"
                            class="absolute -right-6 top-1"
                        />
                    </a>
                    <img
                        src="../assets/user.jpg"
                        alt="Profile picture"
                        class="object-cover w-20 h-20 mb-4 rounded-full"
                    />
                </div>
                <p class="font-semibold uppercase text-[#282545] text-lg">
                    Selamat datang, {{ user?.name }}
                </p>
                <p class="text-xs font-thin text-gray-500">
                    Di LMS by Adhivasindo
                </p>
                <!-- Kalender -->
                <div
                    class="flex flex-col items-center space-y-4 bg-[#282545] rounded-md p-4 mt-10"
                >
                    <!-- Header Bulan dan Tahun -->
                    <div class="flex items-center space-x-2">
                        <button
                            @click="prevWeek"
                            class="p-2 text-white rounded hover:text-gray-300"
                        >
                            &lt;
                        </button>
                        <span class="text-lg font-normal text-white">
                            {{ visibleStartDate.format("MMMM YYYY") }}
                        </span>
                        <button
                            @click="nextWeek"
                            class="p-2 text-white rounded hover:text-gray-300"
                        >
                            &gt;
                        </button>
                    </div>

                    <!-- Kalender Label Hari dan Tanggal -->
                    <div class="flex space-x-2">
                        <div
                            v-for="(day, index) in visibleDays"
                            :key="'day-' + index"
                            class="flex flex-col items-center justify-center p-1 bg-white rounded-lg w-fit"
                        >
                            <!-- Label Hari -->
                            <div
                                class="text-xs font-medium text-[#282545] mb-1"
                            >
                                {{ day.date.format("dd") }}
                                <!-- Contoh: "Su", "Mo" -->
                            </div>
                            <!-- Tanggal -->
                            <div
                                class="p-1 text-xs text-center border rounded-lg w-fit"
                                :class="{
                                    'bg-[#282545] text-white': day.isToday,
                                    'bg-white text-black': !day.isToday,
                                }"
                            >
                                {{ day.date.format("D") }}
                                <!-- Contoh: 19 -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Jadwal -->
                <div class="w-full px-8 my-8">
                    <p
                        class="font-semibold uppercase text-[#282545] text-sm mb-8"
                    >
                        Jadwal Pemateri
                    </p>
                    <div class="flex flex-col gap-8">
                        <div
                            class="flex flex-row items-center justify-between space-x-2"
                        >
                            <div class="flex flex-row gap-2">
                                <div
                                    class="w-10 h-10 bg-purple-400 rounded"
                                ></div>
                                <div class="flex flex-col">
                                    <p class="text-xs font-semibold">
                                        Storytelling dalam pemasaran
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        09.00 - 11.00 with mr. ijam
                                    </p>
                                </div>
                            </div>
                            <div class="mb-2 text-2xl font-semibold">&gt;</div>
                        </div>
                        <div
                            class="flex flex-row items-center justify-between space-x-2"
                        >
                            <div class="flex flex-row gap-2">
                                <div class="w-10 h-10 bg-red-400 rounded"></div>
                                <div class="flex flex-col">
                                    <p class="text-xs font-semibold">
                                        Pengembangan Frontend Modern
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        09.00 - 11.00 with mr. ijam
                                    </p>
                                </div>
                            </div>
                            <div class="mb-2 text-2xl font-semibold">&gt;</div>
                        </div>
                        <div
                            class="flex flex-row items-center justify-between space-x-2"
                        >
                            <div class="flex flex-row gap-2">
                                <div
                                    class="w-10 h-10 bg-yellow-400 rounded"
                                ></div>
                                <div class="flex flex-col">
                                    <p class="text-xs font-semibold">
                                        Pengembangan API
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        09.00 - 11.00 with mr. ijam
                                    </p>
                                </div>
                            </div>
                            <div class="mb-2 text-2xl font-semibold">&gt;</div>
                        </div>
                    </div>
                    <div class="w-64 h-32 mt-6">
                        <img
                            src="../assets/programming.jpg"
                            alt=""
                            class="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>
<script>
import dayjs from "dayjs";
import { computed } from "vue";
import { useAuthStore } from "../store/auth"; // Menggunakan Pinia store
import { useRouter } from "vue-router";

export default {
    data() {
        return {
            today: dayjs(), // Tanggal hari ini
            currentStartDate: dayjs().startOf("week"), // Awal minggu yang terlihat
        };
    },
    computed: {
        // Awal minggu yang ditampilkan
        visibleStartDate() {
            return this.currentStartDate;
        },
        // Menghitung 7 hari dari currentStartDate
        visibleDays() {
            return Array.from({ length: 7 }, (_, i) => {
                const date = this.currentStartDate.add(i, "day");
                return {
                    date: date, // Objek dayjs
                    isToday: date.isSame(this.today, "day"), // Apakah ini hari ini
                };
            });
        },
        // Navigasi berdasarkan ROLE
        navigation() {
            if (!this.user) return [];

            const commonNav = [
                { name: "Dashboard", link: "/dashboard" },
                { name: "Kalender", link: "/kalender" },
            ];

            if (this.user.role === "ADMIN") {
                return [
                    ...commonNav,
                    { name: "Modul", link: "/modul" },
                    { name: "Peserta", link: "/peserta" },
                    { name: "Group Chat", link: "/group-chat" },
                    { name: "Pemateri", link: "/pemateri" },
                    { name: "Settings", link: "/settings" },
                ];
            } else if (this.user.role === "INSTRUCTOR") {
                return [
                    ...commonNav,
                    { name: "Modul", link: "/modul" },
                    { name: "Peserta", link: "/peserta" },
                    { name: "Group Chat", link: "/group-chat" },
                ];
            } else if (this.user.role === "STUDENT") {
                return commonNav; // Mahasiswa hanya bisa mengakses dashboard dan kalender
            }

            return [];
        },
    },
    methods: {
        prevWeek() {
            this.currentStartDate = this.currentStartDate.subtract(7, "day"); // Mundur 7 hari
        },
        nextWeek() {
            this.currentStartDate = this.currentStartDate.add(7, "day"); // Maju 7 hari
        },
        // handleLogout() {
        //     // Hapus token atau data autentikasi
        //     localStorage.removeItem("token");

        //     // Redirect ke halaman login
        //     const router = useRouter();
        //     router.push("/");
        // },
    },
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        // Akses data user dari Pinia store
        const user = computed(() => authStore.user);

        // Fungsi logout
        const handleLogout = () => {
            // Hapus token atau data autentikasi
            localStorage.removeItem("token");
            authStore.logout();

            // Redirect ke halaman login
            router.push("/");
        };

        return {
            user,
            handleLogout, // Pastikan fungsi ini tersedia di template
        };
    },
};
</script>
