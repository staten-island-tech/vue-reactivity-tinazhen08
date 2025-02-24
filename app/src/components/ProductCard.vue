<template>
    <div class="card w-60 bg-white p-3 rounded-l">
      <h1 class="name">{{ product.name }}</h1>
      <img :src="product.img" alt="">
      <p class="description">{{ product.description }}</p>
  
      <label for="amount">Select Amount:</label>
      <select v-model="selectedAmount" id="amount" class="bg-white">
        <option v-for="(amount, key) in product.amounts" :value="key" :key="key">
          {{ key }} - ${{ amount.price.toFixed(2) }}
        </option>
      </select>
  
      <button
        @click="addToCart"
        class="bg-blue-200 text-blue-700 p-2 m-2 rounded-xl hover:bg-blue-300 transition duration-300"
      >
        Add to Cart
      </button>
  
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
        amount: selectedAmount.value,
        price: amount.price,
      });
    } else {
      alert("Please select a valid amount for the flavor.");
    }
  };
  </script>
  
  <style scoped>

  </style>
  