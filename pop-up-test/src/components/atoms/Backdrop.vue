<script setup>
</script>

<template>

<div id="backdrop"></div>
</template>

<style scoped>
#backdrop {
  width:100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
}
</style>