<template>
    <div class="card">
        <div v-for="(flavor, index) in flavors" :key="index">
            <h1 class="card-title">{{ flavor.name }}</h1>
            <p class="card-description">{{ flavor.description }}</p>
        </div>
    </div>
  </template>
  
  <script setup>
  import { flavors } from './products';
  </script>
  
  <style scoped>

  </style>
  