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
  import { flavors } from './products';
  import ProductCard from './ProductCard.vue';
  </script>
  
  <style scoped>

  </style>
  