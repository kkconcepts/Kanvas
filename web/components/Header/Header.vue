<template>
  <header class="header">
    <div class="w-screen grid grid-cols-3 justify-between items-center f-pt-24-32 f-pb-24-32 f-px-24-64">
      <NavDesktop />
      <NavMobile />
      <NuxtLink class="f-w-30-38 text-center m-auto" to="/">
        <p class="hidden">{{ sanityStore.global?.siteTitle }}</p>
        <NuxtImg class="home-btn w-full h-full hover:opacity-80"
          src="https://cdn.sanity.io/images/z7eg2hxx/production/a6a765093aa227a464580f13391f444a7410041a-606x888.png"
          alt="image of Kanvas' symbol logo"
          width="100%"
          height="100%"
        />
      </NuxtLink>
      <div class="button-link w-full h-full flex justify-end items-center">
        <ReservationBtn  />
      </div>
    </div>
  </header>
</template>

<script setup>
const sanityStore = useSanityStore();
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
} 

.f-text-14-16 {
  color: white;
}
</style>