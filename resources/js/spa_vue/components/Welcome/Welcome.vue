<script setup lang="ts">

interface Props {
    title: string;
    subtitle?: string;
}

const { title, subtitle } = defineProps<Props>();

</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <h2>{{ title }}</h2>
        <h3 v-if="subtitle">{{ subtitle }}</h3>
    </div>
</template>
