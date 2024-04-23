<template>
    <div>
        <DefaultLayout>
            <Welcome 
                title="Welcome to Vue 3 with Vite" 
            />
        </DefaultLayout>
    </div>
</template>

<script setup lang="ts">
    import DefaultLayout from './layouts/DefaultLayout.vue';
    import Welcome from './components/Welcome.vue';

</script>