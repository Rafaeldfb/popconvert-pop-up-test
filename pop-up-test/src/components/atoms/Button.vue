<script setup>
  defineProps(['text'])
</script>

<template>
  <div class="button__wrapper">
    <button>{{text}}</button>
  </div>
</template>

<style scoped>
  .button__wrapper button {
    padding: 0.5em 1.5em;
    font-size: 16px;
    font-weight: 600;
    color: hsl(hue, saturation, lightness);
    background-color: hsla(hue, saturation, lightness, alpha);
    border-style: solid;
    border-width: 1px;
    border-color: hsla(hue, saturation, lightness, alpha);
    border-radius: 1em;
  }

</style>