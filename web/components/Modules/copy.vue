<template>
  <section class="text-white copy-container flex flex-col f-max-w-320-560 m-auto items-center justify-center">

    <p class="module-title text-white f-text-16-24 uppercase">{{ module?.title || title }}</p>
    
    <div class="block-content-container f-text-13-15 text-white w-full">
      <BlockContent class="text-white" :blocks="module?.text || blocks" />
    </div>

  </section>
</template>

<script setup>
defineProps({
  module: Object,
  title: String,
  blocks: Array,
});
</script>

<style scoped>
/* Your styles for the mediaGallery component */
</style>