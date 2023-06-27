<script setup>
  const props = defineProps({
    icon: String,
    size: String,
  })
</script>

<template>
  <div class="button__wrapper">
    <button class="button__icon">
      <svg 
        :width="size+'px'"
        :height="size+'px'"
        viewBox="2 0 20 20" 
        xmlns="http://www.w3.org/2000/svg" 
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <g id="Menu / Close_MD"> 
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
  .button__wrapper button {
    padding: 0.2em 0.4em;
    background-color: var(--btn__bg-color);
    border-color: var(--btn__border-color);
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
  }
  .button__wrapper button:hover {
    background-color: var(--btn__hover-bg-color);
    border-color: var(--btn__hover-border-color);
  
  }
  button svg {
    stroke: var(--btn__text-color);
  }

  button:hover svg {
    stroke: var(--btn__hover-border-color);
  }
</style>