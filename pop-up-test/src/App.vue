<script setup>
import { ref, reactive } from 'vue';
import { modalConfig } from './data/modalConfigData.json'

import Button from './components/atoms/Button.vue';
import Modal from './components/organisms/Modal.vue';
import HeaderModal from './components/molecules/HeaderModal.vue';
import GameBody from './components/molecules/GameBody.vue';
import VideoBodyVue from './components/molecules/VideoBody.vue';
import FormModal from './components/molecules/FormModal.vue';

// estado para qual modal mostrar
const registeredModals = ['both', 'game', 'video'];

console.log(modalConfig);

const activeModal = reactive({
  modalConfig: modalConfig,
});

const showModal = ref(false)
const originalModalType = activeModal.modalConfig.modalType;

function modalHadler(type) {
  if (!registeredModals.includes(type)) return false;
  activeModal.modalConfig.modalType = type;
  showModal.value = true;
}

function modalFormSubmitHandler(payload) {
  console.log('App: ')
  if (!payload?.username || !payload?.email) return false;
  
  const receivedData = payload;

  console.log('File sys received: ', receivedData);
  return true;
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
        <Button 
          v-if="['both', 'game'].includes(originalModalType)"
          text="Modal Game" 
          @click="modalHadler(registeredModals[1])"
        ></Button>

        <Button 
          v-if="['both', 'video'].includes(originalModalType)"
          text="Modal Vídeo" 
          @click="modalHadler(registeredModals[2])"
        ></Button>
      </div>
    </section>
  </main>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <HeaderModal 
          :title="activeModal.modalConfig.modalTitle" 
          :sub-title="activeModal.modalConfig.modalSubTitle"
        >
        </HeaderModal>
      </template>
      
      <template #body>
        <GameBody 
          v-if="activeModal.modalConfig.modalType === 'game'" 
          :title="activeModal.modalConfig.modalTitle" 
          :sub-title="activeModal.modalConfig.modalSubTitle"
        ></GameBody>

        <VideoBodyVue 
          v-if="activeModal.modalConfig.modalType === 'video'" 
          :title="activeModal.modalConfig.modalTitle" 
          :sub-title="activeModal.modalConfig.modalSubTitle"
          :video-src="activeModal.modalConfig.videoUrl"
          :video-title="activeModal.modalConfig.modalTitle"
          :video-autoplay="true"
          ></VideoBodyVue>
      </template>

      <template #footer>
        <FormModal @modalFormSubmit="modalFormSubmitHandler" @close="showModal = false"></FormModal>
      </template>
    </Modal>
  </Teleport>

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
