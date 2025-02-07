<template>
    <div class="item-card">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    description: String
})
</script>

<style scoped>

</style>