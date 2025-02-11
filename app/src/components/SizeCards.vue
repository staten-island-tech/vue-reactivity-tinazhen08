<template>
    <div>
      <ProductCard v-for="(size, index) in sizes" 
          :key="index"
          :name="sizes.name"
          :description="size.description"
        />
    </div>
</template>

<script setup>
import { sizes, cart } from './products';
import ProductCard from './ProductCard.vue';
console.log(cart)
</script>

<style scoped>

</style>