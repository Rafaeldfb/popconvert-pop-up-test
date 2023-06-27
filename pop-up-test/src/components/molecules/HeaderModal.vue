<script setup>
import CloseButton from '../atoms/CloseButton.vue';

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
  text-align: left;
  justify-content: left;
}
.modal__header .header__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
}

.modal__header .header__subTitle {
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
</style>