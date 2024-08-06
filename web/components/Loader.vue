<template>
    <div ref="loader" class="loader">
        <div class="loader-container w-full h-full flex flex-col justify-center items-center">
            <NuxtImg class="loader-title"
            src="https://cdn.sanity.io/images/z7eg2hxx/production/a6a765093aa227a464580f13391f444a7410041a-606x888.png"
            alt="image of Kanvas' symbol logo"
            />
        </div>
    </div>
</template>
  
<script setup>
import gsap from 'gsap';
import { onMounted, onUnmounted } from 'vue';

const loader = ref(null);

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(loader.value, {
    opacity: 1,
    duration: 0,
  });
  
  tl.fromTo('.loader-title', {
    opacity: 0,
    y: 0,
  }, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.inOut',
  });

  tl.to('.loader-title', { opacity: 0, duration: 0.5 }, "+=1"); // Fade out title after 1 second
});

onUnmounted(() => {
gsap.killTweensOf(loader.value);
});
</script>
  
<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader-title {
    opacity: 0;
    width: 5%;
}
  
.loading-circle {
    width: 80px;
    height: 80px;
    border: 5px solid #fff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 2s linear infinite;
}
  
@keyframes spin {
    to {
      transform: rotate(360deg);
    }
}
</style>
  