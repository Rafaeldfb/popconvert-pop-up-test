<script setup>
  const props = defineProps({
    text: String,
    role: String,
    fontSize: String,
  })
  const baseFs = props.fontSize ?? '1rem'
</script>

<template>
  <div class="button__wrapper">
    <button :role="role" class="button__text">{{text}}</button>
  </div>
</template>

<style scoped>
  button {
    font-size: v-bind('baseFs');
    padding: 0.5em 1.5em;
    font-weight: 600;
  }
</style>