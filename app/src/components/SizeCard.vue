<template>
    <div class="card w-60 bg-white p-3 rounded-l" >
        <div v-for="(size, index) in sizes" :key="index">
            <h1 class="name">{{ size.name }}</h1>
            <p class="size">{{ size.size }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { sizes } from "./products";
</script>

<style lang="scss" scoped>

</style>