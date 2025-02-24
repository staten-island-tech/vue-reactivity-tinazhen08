<template> 
    <div class="card w-60 bg-white p-3 rounded-l">
        <h1 class="name">{{ product.name }}</h1>
        <img :src="product.img" alt="">
        <p class="description">{{ product.description }}</p>
        
        <label for="amount">Select Amount:</label>
        <select v-model="selectedAmount" id="amount">
            <option v-for="(amount, key) in product.amounts" :value="key" :key="key">
                {{ key }} - ${{ amount.price.toFixed(2) }}
            </option>
        </select>
        
        <p v-if="selectedAmount">Selected Amount: {{ selectedAmount }} - Price: ${{ product.amounts[selectedAmount].price.toFixed(2) }}</p>

        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    product: Object
})

const selectedAmount = ref(null);
</script>

<style scoped>

</style>
