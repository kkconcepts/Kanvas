<script setup>
import '@unocss/reset/tailwind.css'

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading data
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
    <div class="__layout">
        <div class="page">
            <Header />
            <div v-if="isLoading">
                <Loader />
            </div>
            <div v-else>
            </div>
                <main class="main">
                    <NuxtPage />
                </main>
                <BottomFooter />
        </div>
    </div>
</template>

<style>
html {
  scroll-behavior: smooth; /* set scroll-behaviour to smooth here */
}
</style>