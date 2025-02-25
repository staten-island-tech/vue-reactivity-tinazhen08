<template>
  <div class="cart-container flex flex-col space-y-4 p-4 bg-gray-100">
    <h2 class="text-xl font-semibold text-blue-500 mb-4">Your Cart</h2>
    <div class="cart-items flex flex-wrap gap-4">
      <div
        v-for="item in cart"
        :key="item.uniqueId"
        class="cart-item flex flex-col bg-white p-4 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <h3 class="text-lg font-semibold text-blue-600">{{ item.name }}</h3>
        <p>Amount: {{ item.amount }} oz</p>
        <p>Price: ${{ item.price.toFixed(2) }}</p>
        <button v-if="item.type !== 'size'"
          @click="removeFromCart(item)"
          class="bg-blue-500 text-white p-2 rounded-lg mt-2 hover:bg-blue-600"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cart: Array,
})

const emit = defineEmits(["removeFromCart"]);

const removeFromCart = (item) => {
  emit("removeFromCart", item);
};
</script>

<style scoped>

</style>