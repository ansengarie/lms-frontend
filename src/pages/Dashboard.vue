<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-white border-r">
            <!-- Logo -->
            <div class="p-8 border-b">
                <h1 class="text-lg font-bold text-gray-800">LMS Logo</h1>
            </div>

            <!-- Navigation -->
            <nav class="bg-[#282545] text-white h-full p-4 rounded-tr-2xl">
                <ul class="space-y-4">
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Modul
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Peserta
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Group Chat
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Pemateri
                        </a>
                    </li>
                    <hr class=" border-gray-500" />
                    <li>
                        <p class="text-sm font-light">Profile</p>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black"
                        >
                            Kalender
                        </a>
                    </li>
                    <hr class=" border-gray-500" />
                    <li>
                        <a
                            href="#"
                            class="block py-2 px-4 rounded hover:bg-white hover:text-black mt-8"
                        >
                            Log out
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto">
            <!-- Header -->
            <header
                class="flex items-center justify-between bg-white px-6 py-4 shadow"
            >
                <h2 class="text-xl font-semibold">Dashboard</h2>
                <div class="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="border border-gray-300 rounded-md px-4 py-2"
                    />
                    <img
                        src=""
                        alt="User Avatar"
                        class="h-10 w-10 rounded-full"
                    />
                </div>
            </header>
            <!-- Main Dashboard Content -->
            <div class="p-6">
                <!-- Highlight Section -->
                <section class="bg-purple-600 text-white rounded-lg p-6 mb-6">
                    <h3 class="text-lg font-bold">
                        Pemrograman Frontend Modern dengan React dan Angular
                    </h3>
                    <p class="mt-2 text-sm">Pemateri: By Josep | 14-06-2025</p>
                    <button
                        class="mt-4 px-4 py-2 bg-white text-purple-600 font-semibold rounded-md"
                    >
                        Mulai Learning
                    </button>
                </section>
                <!-- Kompetensi Section -->
                <section class="grid grid-cols-3 gap-6 mb-6">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h4 class="text-md font-bold">Pemrograman</h4>
                        <p class="mt-2 text-sm text-gray-600">
                            Pengembangan Frontend Modern dengan React dan
                            Angular
                        </p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h4 class="text-md font-bold">Creative Marketing</h4>
                        <p class="mt-2 text-sm text-gray-600">
                            Strategi efektif pemasaran kreatif.
                        </p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h4 class="text-md font-bold">Management SDM</h4>
                        <p class="mt-2 text-sm text-gray-600">
                            Pengelolaan sumber daya manusia modern.
                        </p>
                    </div>
                </section>
                <!-- Nilai Peserta Section -->
                <section class="bg-white rounded-lg p-4 shadow">
                    <h4 class="text-md font-bold mb-4">Nilai Peserta</h4>
                    <table class="w-full text-left text-sm">
                        <thead>
                            <tr>
                                <th class="pb-2 border-b">Rank</th>
                                <th class="pb-2 border-b">Name</th>
                                <th class="pb-2 border-b">Class</th>
                                <th class="pb-2 border-b">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2">1</td>
                                <td class="py-2">Parja Faiza</td>
                                <td class="py-2">L1</td>
                                <td class="py-2">1,234</td>
                            </tr>
                            <!-- Add more rows here -->
                        </tbody>
                    </table>
                </section>
            </div>
        </main>

        <!-- Content Side -->
    <aside class="w-72 bg-white border-l p-6"></aside>
    </div>
</template>
