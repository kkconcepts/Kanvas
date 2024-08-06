<!-- components/HeroSwiper.vue -->
<template>
    <swiper :modules="[Navigation, Pagination]" navigation pagination loop>
      <swiper-slide v-for="(slide, index) in module.slides" :key="index">
        <img :src="slide.asset.url" :alt="slide.title" />
      </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { Navigation, Pagination } from 'swiper';
  
  // Define props
  const props = defineProps({
    module: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  