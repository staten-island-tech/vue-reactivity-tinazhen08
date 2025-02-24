<template>
  <main class="bg-white text-gray-800">
    <div class="container mx-auto p-6">
      <StoreHeaderVue />

      <div class="flex mt-6">
        <div class="w-2/3 pr-6">
          <div v-if="!sizeSelected">
            <div v-for="size in sizes" :key="size.name" class="size-option mb-4">
              <button
                @click="chooseSize(size)"
                class="bg-blue-100 text-blue-600 p-3 rounded-xl hover:bg-blue-200 focus:outline-none"
              >
                {{ size.name }} - {{ size.size }} oz
              </button>
            </div>
          </div>

          <div class="flavor-selection w-full" v-if="sizeSelected && !flavorSelected">
            <div class="flavors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductCard
                v-for="flavor in flavors"
                :key="flavor.name"
                :product="flavor"
                :selectedAmount="selectedAmounts[flavor.name]"
                @add-to-cart="addToCart"
                class="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div class="w-1/3 pl-6">
          <ShoppingCart :cart="cart" @removeFromCart="removeFromCart"/>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import StoreHeaderVue from '../components/StoreHeader.vue'
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { sizes, flavors } from '../components/products'

const cart = ref([])
const sizeSelected = ref(false)
const flavorSelected = ref(false)
const selectedSize = ref(null)
const selectedAmounts = ref({})

const chooseSize = (size) => {
  selectedSize.value = size
  cart.value.push(size)
  sizeSelected.value = true
}

const addToCart = (item) => {
  if (selectedSize.value && item.amount > selectedSize.value.size) {
    alert(`The amount of ${item.flavor} you selected exceeds the size you chose. Please select a smaller amount.`);
    return;
  }

  const existingItem = cart.value.find(cartItem => cartItem.name === item.flavor)
  if (existingItem) {
    existingItem.amount = item.amount
    existingItem.price = item.price
  } else {
    cart.value.push({
      name: item.flavor,
      amount: item.amount,
      price: item.price,
    })
  }
  console.log(cart.value)
}

const removeFromCart = (item) => {
  const index = cart.value.findIndex(cartItem => cartItem.name === item.name);
  if (index !== -1) {
    cart.value.splice(index, 1);
  }
}
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cart-item {
  width: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-item h3 {
  font-size: 1.25rem;
  color: #1d4ed8;
}

.cart-item p {
  font-size: 1rem;
}
</style>
