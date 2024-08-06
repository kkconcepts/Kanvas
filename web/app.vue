<script setup>
import '@unocss/reset/tailwind.css'
</script>

<template>
    <div class="__layout">
        <div class="page">
            <Header />
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