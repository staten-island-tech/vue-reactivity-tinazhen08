<template>
    <div>
        <div class="card" v-for="(flavor, index) in flavors" :key="index">
            <h1 class="card-title">{{ flavor.name }}</h1>
            <p class="card-description">{{ flavor.description }}</p>
            <button @click="cart.push({flavor, amount: 0.5})">0.5oz</button>
            <button @click="cart.push({flavor, amount: 1})">1oz</button>
            <button @click="cart.push({flavor, amount: 1.5})">1.5oz</button>
        </div>
    </div>
  </template>
  
  <script setup>
  import { flavors, cart } from './products';
  console.log(cart)
  </script>
  
  <style scoped>

  </style>
  