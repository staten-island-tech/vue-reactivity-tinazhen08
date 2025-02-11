<template>
    <div class="card">
        <h1 class="title">{{ name }}</h1>
        <img :src="img" alt="">
        <p class="description">{{ description }}</p>
        <h6 class="price">{{ price }}</h6>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    description: String,
    price: Number,
    img: String
})
</script>

<style lang="scss" scoped>

</style>