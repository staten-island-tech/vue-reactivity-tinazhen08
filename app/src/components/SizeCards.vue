<template>
    <div>
      <div v-for="(size, index) in sizes" :key="index">\
        <h1 class="cup-title">{{ size.name }}</h1>
        <p class="cup-size">{{ size.size }}</p>
        <button @click="cart.push({max: size.size})"></button>
      </div>  
    </div>
</template>

<script setup>
import { sizes, cart } from './products';
console.log(cart)
</script>

<style scoped>

</style>