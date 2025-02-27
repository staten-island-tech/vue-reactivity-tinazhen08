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
              <FlavorCard
                v-for="flavor in flavors"
                :key="flavor.name"
                :product="flavor"
                @add-to-cart="addFlavorToCart"
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
              <ToppingCard
                v-for="topping in toppings"
                :key="topping.name"
                :product="topping"
                @add-to-cart="addToppingToCart"
                class="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:shadow-2xl w-full overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div class="w-1/3 pl-6">
          <ShoppingCart :cart="cart" @removeFromCart="removeFromCart"/>
          <div class="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 class="text-xl font-bold text-blue-600">Cart Totals</h2>
            <div class="mt-4 text-lg text-gray-700">
              <p class="flex justify-between">
                <span>Sub-total:</span>
                <span class="font-semibold">${{ totals.totalBeforeTaxes }}</span>
              </p>
              <p class="flex justify-between mt-2">
                <span>Total Tax (8.875%):</span>
                <span class="font-semibold">${{ totals.totalTax }}</span>
              </p>
              <p class="flex justify-between mt-2">
                <span>Total:</span>
                <span class="font-semibold text-blue-600">${{ totals.totalAfterTaxes }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import StoreHeaderVue from '../components/StoreHeader.vue'
import SizeCard from '@/components/SizeCard.vue'
import FlavorCard from '@/components/FlavorCard.vue'
import ToppingCard from '@/components/ToppingCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { sizes, flavors, toppings } from '../components/products'

const cart = ref([])
const sizeSelected = ref(false)
const flavorSelected = ref(false)
const selectedSize = ref(null)

const chooseSize = (size) => {
  selectedSize.value = size
  cart.value.push({
    name: size.name,
    amount: size.size,
    price: size.price,
    type: 'size',
  })
  sizeSelected.value = true
}

const addFlavorToCart = (flavorData) => {
  const { flavor, amount } = flavorData;

  const totalFlavorAmount = cart.value
    .filter(item => item.type === 'flavor' && item.size === selectedSize.value.name)
    .reduce((total, item) => total + Number(item.amount), 0);

  if (totalFlavorAmount + Number(amount) > selectedSize.value.maxFlavorsAmount) {
    alert(`You can only add up to ${selectedSize.value.maxFlavorsAmount} oz of flavors for the ${selectedSize.value.name} size.`);
    return;
  }

  const existingItem = cart.value.find(
    (item) =>
      item.name === flavor &&
      item.type === 'flavor' &&
      item.size === selectedSize.value.name
  );

  if (existingItem) {
    existingItem.amount += Number(amount); 
    existingItem.price = existingItem.amount * 0.5; 
  } else {
    cart.value.push({
      name: flavor,
      amount: Number(amount),
      price: Number(amount) * 0.5,
      type: 'flavor',
      size: selectedSize.value.name,
    });
  }
};

const addToppingToCart = (toppingData) => {
  const { topping, amount } = toppingData;

  const totalToppingAmount = cart.value
    .filter(item => item.type === 'topping' && item.size === selectedSize.value.name)
    .reduce((total, item) => total + Number(item.amount), 0);

  if (totalToppingAmount + Number(amount) > selectedSize.value.maxToppingsAmount) {
    alert(`You can only add up to ${selectedSize.value.maxToppingsAmount} oz of toppings for the ${selectedSize.value.name} size.`);
    return;
  }

  const existingItem = cart.value.find(
    (item) =>
      item.name === topping &&
      item.type === 'topping' &&
      item.size === selectedSize.value.name
  );

  if (existingItem) {
    existingItem.amount += Number(amount);  
    existingItem.price = existingItem.amount * 0.5;  
  } else {
    cart.value.push({
      name: topping,
      amount: Number(amount),
      price: Number(amount) * 0.5,
      type: 'topping',
      size: selectedSize.value.name,
    });
  }
};

const removeFromCart = (item) => {
  const index = cart.value.findIndex(cartItem => cartItem.name === item.name && cartItem.type === item.type && cartItem.size === item.size)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

const submitFlavors = () => {
  flavorSelected.value = true
}

const calculateTotal = () => {
  const totalBeforeTaxes = cart.value.reduce((total, item) => total + item.price, 0);
  const taxRate = 0.08875; 
  const totalTax = totalBeforeTaxes * taxRate;
  const totalAfterTaxes = totalBeforeTaxes + totalTax;

  return {
    totalBeforeTaxes: totalBeforeTaxes.toFixed(2),
    totalTax: totalTax.toFixed(2),
    totalAfterTaxes: totalAfterTaxes.toFixed(2),
  };
};

const totals = computed(() => calculateTotal());

</script>

<style scoped>

</style>
