<script setup lang="ts">
    import { ref } from 'vue';
    import { Greet } from '../types/Greet';

    interface Props {
        title: string;
        subtitle?: string;
    }

    const {title, subtitle} = defineProps<Props>();

    const greet = ref<Greet>({message: 'Hello World!'});
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <h1>Welcomerrr!!!!</h1>
        <h2>{{ title }}</h2>
        <h3 v-if="subtitle">{{ subtitle }}</h3>
    </div>
</template>
