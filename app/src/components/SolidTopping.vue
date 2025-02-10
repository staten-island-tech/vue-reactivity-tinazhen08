<template>
    <div>
        <div class="card" v-for="(stopping, index) in solidToppings" :key="index">
            <h1 class="card-title">{{ stopping.name }}</h1>
            <p class="card-description">{{ stopping.description }}</p>
            <button @click="cart.push({stopping, amount: 0.5})">0.5oz</button>
            <button @click="cart.push({stopping, amount: 1})">1oz</button>
            <button @click="cart.push({stopping, amount: 1.5})">1.5oz</button>
        </div>
    </div>
</template>

<script setup>
import { solidToppings, cart } from './products';
console.log(cart)
</script>

<style lang="scss" scoped>

</style>