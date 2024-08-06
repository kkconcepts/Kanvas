<template>
  <figure loading="h-full w-full">
    <Img v-if="image && media.image" 
    :preload 
    :width
    :media 
    :src="media.image" 
    :alt="media.alt" 
    :class-names="assetClassNames" />
    <Video v-if="video && media.src" :src="media.src" :class-names="assetClassNames" />
  </figure>
</template>

<script setup>

const { media, lazy } = defineProps({
  media: Object,
  assetClassNames: [String, Object, Array],
  width: Number,
  preload: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
});

const image = media.type === 'image' || media._type === 'mainImage';
const video = media.type === 'video' || media._type === 'mainVideo';
</script>

<style scoped>
/* Your styles for the [page] component */
</style>
