<script setup>
import Button from '../atoms/Button.vue';
import CloseButton from '../atoms/CloseButton.vue';

const props = defineProps({ show: Boolean });

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal__closeBtn">
            <CloseButton size="18" icon="/close.svg" @click="$emit('close')"></CloseButton>
          </div>

        <div class="modal-header">
          <slot name="header">default header</slot>
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
  position: relative;
  /* width: clamp(300px, 60vw, 768px); */
  width: clamp(var(--modal__min-width), var(--modal__default-width), var(--modal__default-width));
  margin: auto;
  padding: 1rem 1.5rem;
  background-color: var(--bg__color);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.33);
  transition: all 0.3s ease;
}

.modal__closeBtn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
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