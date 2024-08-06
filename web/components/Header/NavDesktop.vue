<template>
  <nav class="f-text-13-15 space-x-2rem hidden md:block text-white">
    <NuxtLink v-for="page in sanityStore.global?.navigation" :key="page._id" :to="'/' + page.slug.current">{{ page.title }}</NuxtLink>
    <NuxtLink to="/join-us">Join us</NuxtLink>
    <NuxtLink to="https://www.instagram.com/kanvasusa" target="_blank" rel="noopener noreferrer">Follow us</NuxtLink>
  </nav>
</template>

<script setup>
const sanityStore = useSanityStore();
</script>

<style scoped>
nav .router-link-exact-active {
  opacity: 80%;
}
</style>