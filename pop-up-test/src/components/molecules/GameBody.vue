<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
}) 
</script>

<template>
  <div class="modal__body">
    <div class="modal__game-container">
      <img src="/caca-niquel.png" alt="game" title="Play!">
    </div>
  </div>
</template>

<style scoped>
.modal__body {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.modal__game-container{
  max-height: 50vh;
  max-width: 50vh;
  margin: auto;
}
.modal__game-container img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
}
/* .modal__body .header__title {
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
}

.modal__body .header__subTitle {
  width: 100%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
} */
</style>