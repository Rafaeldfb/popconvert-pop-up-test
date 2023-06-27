<script setup>
import Backdrop from '../atoms/Backdrop.vue';
defineProps(['width', 'height'])
</script>

<template>
<Backdrop>
  <div class="modal">
    <div class="modal__header">

    </div>

    <div class="modal__body">

    </div>

    <div class="modal__footer">

    </div>
  </div>
</Backdrop>
</template>

<style scoped>
.modal {
  --modal__width: calc(v-bind('$props.width') * 1px);
  --modal__height: calc(v-bind('$props.height') * 1px);
  
  width: var(--modal__width);
  height: var(--modal__height);
  z-index: 100;
  position: absolute;
  top: calc(50vh - var(--modal__height)/2);
  left: calc(50vw - var(--modal__width)/2);
}

.modal__header {
  width:auto;
}
</style>