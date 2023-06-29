<script setup>
import { ref } from 'vue';
  const props = defineProps({
    /** @param {String} size - define o tamanho da checkbox [sm - 0.5rem, lg - 1.5rem, auto - 0.75em] */
    size: String,
    /** @param {String} labelText - Texto exibido ao lado da checkbox */
    labelText: String,
    /** @param {String} id - Id para o input da checkbox */
    id: String,
  })

  const checked = ref(false);
  
  function setCheckedHandler() {
    checked.value = !checked.value;
  }
</script>

<template>
  <div class="checkbox__wrapper">
      <label :class="size">
        <input 
          :id="id"
          type="checkbox" 
          :class="checked ? 'checked' : ''"
          @change="setCheckedHandler()"
          :checked="checked"
          required
        />

        <span>{{props.labelText}}</span>
      </label>
    </div>
</template>

<style scoped>
.sm {
  font-size: 0.5rem;
}
.lg {
  font-size: 1.5rem;
}
.auto {
  font-size: 0.75em;
}

.checkbox__wrapper label {
    display: flex;
    align-items: center;
    cursor: pointer;
}
/* customização da checkbox */
label input[type="checkbox"] {
  /* removendo default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* design custom*/
  font-size: inherit;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid var(--btn__hover-text-color);
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
input[type="checkbox"].checked {
  background-color: var(--btn__hover-border-color);
  position: relative;
}
input[type="checkbox"].checked::before {
  content: "\2714";
  font-size: 1em;
  color: #fff;
  position: absolute;
  left: 0.25em;
  top: 0.1em;
}

input[type="checkbox"]:hover {
  box-shadow: 0 0 5px var(--btn__hover-text-color);
}
input[type="checkbox"]:hover:not(.checked) {
    background-color: var(--bg__color);
    filter: brightness(170%);
}
input[type="checkbox"].checked:hover {
  filter: brightness(150%);
}

</style>