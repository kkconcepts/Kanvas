<template>
  <div class="video-container">
    <video ref="video" :class="classNames" :poster="thumbnail" :autoplay="autoplay" :playsinline="playsinline" :muted="muted" :loop="loop" />
    <button @click="togglePlay" class="video-control pause hidden">Pause</button>
  </div>
</template>

<script setup>
import Hls from 'hls.js';

const props = defineProps({
  src: String,
  classNames: [String, Object, Array],
  autoplay: {
    type: Boolean,
    default: true,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
});

const video = ref(null);
const isPlaying = ref(false); // Track the play/pause state

const thumbnail = computed(() => `https://image.mux.com/${props.src}/thumbnail.webp?time=0`);

onMounted(() => {
  const videoSrc = `https://stream.mux.com/${props.src}.m3u8`;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video.value);
    // hls.startLevel = 3;
  } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
    video.value.src = videoSrc;
  }
});

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    video.value.play();
  } else {
    video.value.pause();
  }
  // Update button text based on the state
  document.querySelector('.video-control').textContent = isPlaying.value ? 'Pause' : 'Play';
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hauto video {
  width: 100%;
  height: auto;
}

.wauto video {
  width: auto;
  height: 100%;
}
</style>
