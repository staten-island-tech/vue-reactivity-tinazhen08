<template>
    <div class="card">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<style scoped>

</style>