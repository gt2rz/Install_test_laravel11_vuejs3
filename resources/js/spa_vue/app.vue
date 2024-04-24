<template>
    <div>
        <Layout>
            <Welcome title="Welcome to Vue 3 with Vite" />
        </Layout>
    </div>
</template>

<script setup lang="ts">
import Layout from "./layouts/DefaultLayout/index.vue";
import Welcome from "./components/Welcome.vue";
</script>
