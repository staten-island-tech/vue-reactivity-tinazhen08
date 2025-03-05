<template>
  <div class="w-60 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
    <h1 class="text-lg font-bold text-blue-600 mb-2">{{ product.name }}</h1>
    <!-- <img :src="product.img" alt="Product image" class="w-full h-auto rounded-md mb-4" /> -->
    <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>
  
    <label for="amount" class="block text-sm font-medium text-gray-700 mb-2">Select Amount:</label>
    <select v-model="selectedAmount" id="amount" class="bg-white border border-gray-300 text-gray-800 p-2 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option v-for="(amount, key) in product.amounts" :value="key" :key="key">
        {{ key }} - ${{ amount.price.toFixed(2) }}
      </option>
    </select>
  
    <div class="flex justify-center">
      <button
        @click="addToCart"
        class="bg-blue-200 text-blue-700 p-2 rounded-xl hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits();

const selectedAmount = ref(Object.keys(props.product.amounts)[0]);

const addToCart = () => {
  const amount = props.product.amounts[selectedAmount.value];
  if (amount) {
    emit('add-to-cart', {
      flavor: props.product.name,
      amount: selectedAmount.value
    });
  } else {
    alert("Please select a valid amount for the flavor.");
  }
};
</script>

<style scoped>

</style>

