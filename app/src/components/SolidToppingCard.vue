<template>
    <div>
        <ProductCard v-for="solidTopping in solidToppings" :key="solidTopping.name">

        </ProductCard>
    </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue"
import { solidToppings } from "./products"
</script>

<style scoped>

</style>