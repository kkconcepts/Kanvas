<template>
  <section class="w-full h-full">
    <Swiper
    class="w-full h-full"
      :modules="[SwiperAutoplay, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :speed="800"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
    <SwiperSlide v-for="media in module?.assets" :key="media._id">
      <Media class="w-full h-full" :media="media"/>
    </SwiperSlide>
      </Swiper>
  </section>
</template>

<script setup>
defineProps({
  module: Object
});
</script>

<style scoped>
/* Your styles for the mediaGallery component */
</style>