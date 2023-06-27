<script setup>
import Button from '../atoms/Button.vue';
import CloseButton from '../atoms/CloseButton.vue';

const props = defineProps({
  show: Boolean,
  width: Number,
  height: Number,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <div class="modal__header-slot-wrapper">
            <slot name="header">default header</slot>
          </div>

          <div class="modal__header-close">
            <CloseButton size="18" icon="/close.svg" @click="$emit('close')"></CloseButton>
          </div>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            
            <div class="modal-default-button">
              <Button @click="$emit('close')" text="Fechar"></Button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg__color-alpha);
  backdrop-filter: blur(10px);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--bg__color);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.33);
  transition: all 0.3s ease;
}

.modal__header {
  display: flex;
  align-items: center;
}
.modal__header-slot-wrapper {
  flex-grow: 1;
  margin-bottom: 1rem;
}
.modal__header .modal-header-close {
  flex-shrink: 1;
  margin-bottom: auto;
  margin-top: 0.1rem;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>