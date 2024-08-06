<template>
  <transition name="fade">
    <div v-if="showPopup" class="pop-up">
      <div class="rounded-2 flex flex-col justify-center items-center f-gap-24-32 f-pt-24-32 f-pb-24-32 f-px-24-64 f-w-320-450 f-h-420-560 z-13 bg-dark-950">
        <NuxtImg class="about-image rounded-3 f-max-w-200-240 f-max-h-200-240"
          src="https://cdn.sanity.io/images/z7eg2hxx/production/82bdcce20f9e237d490ee3724b5c9fd567ccd5d0-2000x2000.png" 
          quality="80"
          loading="lazy"
          format="webp"
        />  

        <div class="flex flex-col f-gap-10-14 text-white text-center">
          <h2 class="f-text-16-24 uppercase">From us, to you.</h2>
          <h3 class="f-text-13-15">
            Enjoy 20% off on your next purchase of $100 or more with this
            exclusive discount code. Only valid at our Dallas and Chicago
            locations. Offer expires on 11/26.
          </h3>
        </div>

        <ClaimBtn />

        <div class="close-btn f-p-2-4 f-mt-75-100 f-mb-24-32 f-mx-24-64 rounded-2 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">
          <button @click="closePopup" class="f-w-25-30 f-h-25-30 f-text-13-15 i-mdi-close"></button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showPopup = ref(false);

const closePopup = () => {
  showPopup.value = false;
};

onMounted(() => {
  // Show the popup after 5 seconds
  setTimeout(() => {
    showPopup.value = true;
  }, 5000);
});
</script>

<style scoped>
.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.637);
}

.close-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
