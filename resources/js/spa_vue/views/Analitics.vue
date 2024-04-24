<template>
    <div id="analitics">
        <!-- breadcrumb -->
        <nav class="mb-6 text-sm font-semibold" aria-label="Breadcrumb">
            <ol class="inline-flex list-none p-0">
                <li class="flex items-center text-blue-500">
                    <a href="#" class="text-gray-700">Home</a>
                    <svg
                        class="mx-3 h-3 w-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        />
                    </svg>
                </li>
                <li class="flex items-center">
                    <a href="#" class="text-gray-600">{{ currentPath }}</a>
                </li>
            </ol>
        </nav>
        <!-- breadcrumb end -->

        <div class="mb-6 items-center justify-between lg:flex">
            <p class="mb-2 text-2xl font-semibold lg:mb-0">Analitics</p>
            <button
                class="rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white shadow hover:bg-blue-600 focus:outline-none"
            >
                View Logs
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const currentPath = route.name;
</script>
