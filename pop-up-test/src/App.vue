<script setup>
import { ref } from 'vue';
import Button from './components/atoms/Button.vue';
// estado para qual modal mostrar

const registeredModals = ['none', 'modal-1', 'modal-2'];

const activeModal = ref({activeModal: registeredModals[0]});

function modalHadler(target) {
  alert('clicked')
}

</script>

<template>
  <main>
    <h1 class="main__header-h1">Mussum Ipsum, cacilds vidis litro abertis</h1>

    <section>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. 
        Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, 
        arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
        Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis 
        que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se 
        pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam 
        laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. 
        Praesent lacinia ultrices consectetur. Sed non ipsum felis.
      </p>
      
      <div id="buttonsContainer">
        <Button text="Modal 1" @click="modalHadler(registeredModals[1])" ></Button>

        <Button text="modal 2" @click="modalHadler(registeredModals[2])" ></Button>
      </div>
    </section>
  </main>
</template>

<style scoped>
h1.main__header-h1 {
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 5em;
  line-height: 0.9;
  text-align: left;
}

section p {
  text-align: start;
  word-break: break-word;
  word-spacing: 0.3rem;
  line-height: 1.6;
}

#buttonsContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
#buttonsContainer > div {
  margin-right: 2rem;
}
</style>
