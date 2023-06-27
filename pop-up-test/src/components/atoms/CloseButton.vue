<script setup>
  const props = defineProps({
    icon: String,
    size: String,
  })
  let viewBoxConf = `${1.5} ${1.8} ${(props.size*115/100)} ${(props.size*115/100)}`
  // viewBox="0 0 20 20" default
</script>

<template>
  <div class="button__wrapper">
    <button class="button__icon">
      <svg 
        :width="size+'px'"
        :height="size+'px'"
        :viewBox="viewBoxConf" 
        xmlns="http://www.w3.org/2000/svg" 
      >
        <g stroke-width="0"></g>
        <g stroke-linecap="round" stroke-linejoin="round"></g>
        <g> 
          <g> 
            <path 
              id="Vector" 
              d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round">
            </path> 
          </g> 
        </g>
      </svg>
    </button>
  </div>
</template>

<style scoped>
  button {
    padding: 0;
    padding-inline: 0;
    padding-block: 0;
    display: inline-flex;
    align-content: center;
    text-align: center;
    aspect-ratio: 1 / 1;
    width: v-bind('size');
    height: v-bind('size');
  }
  button {
    background-color: var(--btn__bg-color);
    border-color: var(--btn__border-color);
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
  }
  button:hover {
    border-color: var(--btn__hover-border-color);
  }
  button svg {
    stroke: var(--btn__text-color);
  }

  button:hover svg {
    stroke: var(--btn__hover-border-color);
  }
</style>