<template>
  <img class="lazyload" :src="`${asset}&width=2`" :data-src="asset" :alt="alt" />
</template>

<script setup>
defineProps({
  asset: String,
  alt: {
    type: String,
    default: 'Product Image',
  },
});
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
