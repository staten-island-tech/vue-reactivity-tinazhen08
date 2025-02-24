<template>
  <div class="cart">
    <ShoppingCart/>
  </div>
</template>

<script setup>
import ShoppingCart from '@/components/ShoppingCart.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
