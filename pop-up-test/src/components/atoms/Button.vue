<script setup>
  const props = defineProps({
    text: String,
  })
</script>

<template>
  <div class="button__wrapper">
    <button class="button__text">{{text}}</button>
  </div>
</template>

<style scoped>
  button {
    padding: 0.5em 1.5em;
    font-size: 16px;
    font-weight: 600;
  }
</style>