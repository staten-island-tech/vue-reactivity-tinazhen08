<template>
  <main class="bg-white text-gray-800">
    <div class="container mx-auto p-6">
      <StoreHeaderVue />

      <div class="flex mt-6">
        <div class="w-2/3 pr-6">
          <div v-if="!sizeSelected">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <SizeCard v-for="(size, index) in sizes" :key="index" :size="size">
                <button
                  @click="chooseSize(size)"
                  class="bg-blue-100 text-blue-600 p-3 rounded-xl hover:bg-blue-200 focus:outline-none w-full mt-4"
                >
                  Add to Cart
                </button>
              </SizeCard>
            </div>
          </div>

          <div class="flavor-selection w-full" v-if="sizeSelected && !flavorSelected">
            <div class="flavors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductCard
                v-for="flavor in flavors"
                :key="flavor.name"
                :product="flavor"
                :selectedAmount="selectedAmounts[flavor.name]"
                @add-to-cart="(amount) => addFlavorToCart(flavor, amount)"
                class="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:shadow-2xl w-full overflow-hidden"
              />
            </div>
            <button
              @click="submitFlavors"
              class="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 focus:outline-none w-full mt-6"
            >
              Submit Flavors
            </button>
          </div>

          <div class="topping-selection w-full" v-if="flavorSelected">
            <div class="toppings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductCard
                v-for="topping in toppings"
                :key="topping.name"
                :product="topping"
                @add-to-cart="(amount) => addToppingToCart(topping, amount)"
                class="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:shadow-2xl w-full overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div class="w-1/3 pl-6">
          <ShoppingCart :cart="cart" @removeFromCart="removeFromCart" @updateAmount="updateAmount"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import StoreHeaderVue from '../components/StoreHeader.vue'
import SizeCard from '@/components/SizeCard.vue'
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { sizes, flavors, toppings } from '../components/products'

const cart = ref([])
const sizeSelected = ref(false)
const flavorSelected = ref(false)
const selectedSize = ref(null)
const selectedAmounts = ref({})

const chooseSize = (size) => {
  selectedSize.value = size
  const existingItem = cart.value.find(item => item.name === size.name && item.type === 'size')

  if (existingItem) {
    existingItem.amount += 1
    existingItem.price = size.price * existingItem.amount
  } else {
    cart.value.push({
      name: size.name,
      amount: 1,
      price: size.price,
      type: 'size',
      size: size.amount
    })
  }
  sizeSelected.value = true
}

const addFlavorToCart = (flavor, amount) => {
  const existingItem = cart.value.find(item => item.name === flavor.name && item.type === 'flavor' && item.size === selectedSize.value.name)

  if (existingItem) {
    existingItem.amount = amount
    existingItem.price = flavor.price * amount
  } else {
    cart.value.push({
      name: flavor.name,
      amount: amount,
      price: flavor.price * amount,
      type: 'flavor',
      size: selectedSize.value.name,
    })
  }
}

const addToppingToCart = (topping, amount) => {
  const existingItem = cart.value.find(item => item.name === topping.name && item.type === 'topping' && item.size === selectedSize.value.name && item.flavor === topping.flavor)

  if (existingItem) {
    existingItem.amount = amount
    existingItem.price = topping.price * amount
  } else {
    cart.value.push({
      name: topping.name,
      amount: amount,
      price: topping.price * amount,
      type: 'topping',
      size: selectedSize.value.name,
      flavor: topping.flavor,
    })
  }
}

const removeFromCart = (item) => {
  const index = cart.value.findIndex(cartItem => cartItem.name === item.name && cartItem.type === item.type && cartItem.size === item.size && (cartItem.type !== 'topping' || cartItem.flavor === item.flavor))
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

const updateAmount = (item, newAmount) => {
  const existingItem = cart.value.find(cartItem => cartItem.name === item.name && cartItem.type === item.type && cartItem.size === item.size && (cartItem.type !== 'topping' || cartItem.flavor === item.flavor))
  
  if (existingItem) {
    existingItem.amount = newAmount
    existingItem.price = item.price * newAmount
  }
}

const submitFlavors = () => {
  flavorSelected.value = true
}
</script>

<style scoped>

</style>




