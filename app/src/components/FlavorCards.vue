<template>
    <div>
        <ProductCard v-for="(flavor, index) in flavors" 
            :key="index"
            :name="flavor.name"
            :description="flavor.description"
        />
    </div>
  </template>
  
  <script setup>
  import { flavors, cart } from './products';
  import ProductCard from './ProductCard.vue';
  console.log(cart)
  </script>
  
  <style scoped>

  </style>
  