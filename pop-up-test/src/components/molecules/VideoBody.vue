<script setup>
import Loading from '../atoms/Loading.vue'

const props = defineProps({
  title: String,
  subTitle: String,
  videoSrc: String,
  videoTitle: String,
  videoAutoplay: Boolean,
});

const originalSize = {
  width: "853",
  height: "480",
}

function parseAutoplay() {
  let resultUrl;
  const hasUrlSetting = props.videoSrc.includes('autoplay=1');

  if (!props.videoAutoplay || hasUrlSetting) return props.videoSrc;

  else if (props.videoAutoplay && !hasUrlSetting) {
    resultUrl = props.videoSrc.includes('autoplay=') 
      ? props.videoSrc.replace('autoplay=0', 'autoplay=1') 
      : `${props.videoSrc}${props.videoSrc.includes('?') ? '&' : '?'}autoplay=1`;
  }
  return resultUrl;
}

const videoUtils = {
  src: parseAutoplay(),
  title: props.videoTitle ?? "",
}
</script>

<template>
  <div class="modal__body">
    <div class="modal__video-container">
      <Loading class="loading" width="100%" height="100%"></Loading>

      <iframe class="modal__video-iframe"
        width="100%"
        height="100%"
        :src="videoUtils.src" 
        :title="videoUtils.title" 
        frameborder="0" 
        allow="autoplay;" 
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.modal__body {
  display: flex;
  aspect-ratio: 16 / 9;
}
.modal__video-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
}
.modal__video-iframe {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
