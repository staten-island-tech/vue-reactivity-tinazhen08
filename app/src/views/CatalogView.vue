<template>
  <main class="bg-white text-gray-800">
    <div class="container mx-auto p-6">
      <div class="flex flex-wrap">
        <StoreHeaderVue />

        <div class="shop-container w-full" v-if="!sizeSelected">
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
              @update:selectedAmount="updateSelectedAmount(flavor.name, $event)"
              class="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:shadow-2xl"
            >
              <button
                @click="selectFlavor(flavor)"
                class="bg-blue-200 text-blue-700 p-2 rounded-xl hover:bg-blue-300 transition duration-300"
              >
                Add to Cart
              </button>
            </ProductCard>
          </div>

          <button
            v-if="Object.keys(selectedAmounts).length > 0"
            @click="submitFlavors"
            class="bg-blue-500 text-white p-3 rounded-xl mt-6 hover:bg-blue-600 focus:outline-none"
          >
            Submit Flavors
          </button>
        </div>

        <div v-if="flavorSelected" class="solid-toppings-selection mt-6">
          <p class="text-xl font-semibold text-blue-500">Now, choose your toppings!</p>
        </div>
      </div>

      <ShoppingCart v-for="products in cart" :key="products.name" :cart="cart" :item="product" />
    </div>
  </main>
</template>

<script setup>
import StoreHeaderVue from '../components/StoreHeader.vue'
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { ref } from 'vue'
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

const selectFlavor = (flavor) => {
  selectedAmounts.value = { [flavor.name]: flavor.amounts[0].key }
}

const updateSelectedAmount = (flavorName, amount) => {
  selectedAmounts.value[flavorName] = amount
}

const submitFlavors = () => {
  const selectedFlavor = Object.keys(selectedAmounts.value)[0]
  const flavor = flavors.find((f) => f.name === selectedFlavor)
  const amount = selectedAmounts.value[selectedFlavor]

  const flavorInCart = cart.value.find((item) => item.name === flavor.name)

  if (!flavorInCart) {
    cart.value.push({
      name: flavor.name,
      amount,
      price: flavor.amounts[amount].price,
    })
  }

  flavorSelected.value = true
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
