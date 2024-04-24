<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
            <Sidebar />

            <div
                class="min-h-screen w-full bg-gray-100 pl-0 lg:pl-64"
                :class="sideBarOpen ? 'overlay' : ''"
                id="main-content"
            >
                <Navbar />

                <main class="mb-20 bg-gray-100 p-6">
                    <router-view />
                </main>

                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup lasng="ts">
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
