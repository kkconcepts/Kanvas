<template>
  <footer class="footer">
    <div class="footer-container f-pt-24-32 f-pb-24-32 f-px-24-64 grid grid-cols-3 f-gap-16-24">

        <div class="nav-links w-full m-auto flex flex-col f-gap-8-12">
          <h3 class="footer-title">LOCATION</h3>
          <p class="f-text-13-15 leading-normal">
            Viale Monte Nero, 34
            <br>
            20135 Milano, Italy
            <br>
            M: + 39 349 127 4217
            <br>
            booking@kanvasusa.com
          </p>
        </div>

        <div class="nav-links w-full m-auto flex flex-col f-gap-8-12">
          <h3 class="footer-title uppercase text-center">HOURS</h3>
          <p class="f-text-13-15 text-center leading-normal">
            Dinner: Sunday to Thursday
            <br>
            19:00 - 0:00
            <br>
            Friday & Saturday, 19:00 - 1:30
            <br>
            booking@kanvasusa.com
          </p>
        </div>

        <ul class="help-links flex flex-col">
          <h3 class="footer-title text-end uppercase">SOCIAL</h3>
          <NuxtLink class="f-text-13-15 text-end leading-normal" to="/">
            Instagram
          </NuxtLink>
          <NuxtLink class="f-text-13-15 text-end leading-normal" to="/">
            LinkedIn
          </NuxtLink>
          <NuxtLink class="f-text-13-15 text-end leading-normal" to="/">
            TikTok
          </NuxtLink>
        </ul>
      </div>
  </footer>
</template>

<script setup>
const year = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  min-height: 65vh;
}
</style>
