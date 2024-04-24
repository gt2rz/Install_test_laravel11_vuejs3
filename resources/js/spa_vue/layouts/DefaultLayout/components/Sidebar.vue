import router from '../../router';
<template>
    <div
        class="fixed z-30 h-screen w-1/2 border-r bg-gray-100 md:left-0 md:top-0 md:w-1/3 lg:block lg:w-64"
        id="main-nav"
    >
        <div class="mb-8 flex h-20 w-full items-center border-b px-4">
            <p class="pl-4 text-3xl font-semibold text-blue-400">LOGO</p>
        </div>

        <div class="mb-6 px-4">
            <div class="mb-4 px-4" v-for="section in links">
                <p class="mb-1 text-sm font-semibold">
                    {{ section.title.toUpperCase() }}
                </p>
                <div
                    class="flex h-10 w-full cursor-pointer items-center rounded-lg px-4 text-blue-400 hover:bg-gray-200"
                    v-for="link in section.links"
                >
                    <span v-html="link.icon"></span>

                    <router-link :to="link.path" class="text-gray-700">
                        {{ link.title }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { links } from "../../links";
</script>
