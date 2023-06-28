<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
}) 
</script>

<template>
  <div class="modal__header">
    <div class="header__title">{{ title }}</div>
    <div class="header__subTitle">{{ subTitle }}</div>
  </div>
</template>

<style scoped>
.modal__header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.modal__header .header__title {
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
}

.modal__header .header__subTitle {
  width: 100%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
</style>