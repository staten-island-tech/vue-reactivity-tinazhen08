<template>
  <div class="card w-60 bg-white p-3 rounded-lg shadow-lg">
    <h1 class="name font-bold text-xl text-blue-600">{{ size.name }}</h1>
    <p class="size text-sm text-gray-500">{{ size.size }} oz</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  size: Object,
})
</script>

<style scoped></style>
