<template>
  <div class="cart-container flex flex-col space-y-4 p-4 bg-gray-100">
    <h2 class="text-xl font-semibold text-blue-500 mb-4">Your Cart</h2>
    <div class="cart-items flex flex-wrap gap-4">
      <div
        v-for="item in cart"
        :key="item.name"
        class="cart-item flex flex-col bg-white p-4 rounded-lg shadow-md w-1/3"
      >
        <h3 class="text-lg font-semibold text-blue-600">{{ item.name }}</h3>
        <p v-if="item.amount">Amount: {{ item.amount }} oz</p>
        <p v-if="item.size">Size: {{ item.size }} oz</p>
        <p>Price: ${{ item.price.toFixed(2) }}</p>
        <button
          v-if="!item.size"
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

// Emit an event to remove the item from the cart (got helped by ai so remove button would function properly)
const emit = defineEmits(["removeFromCart"]);

const removeFromCart = (item) => {
  emit("removeFromCart", item);
};
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
