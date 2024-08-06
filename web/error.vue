<template>
  <div class="bg-black flex h-screen w-full items-center justify-center flex-col f-gap-16-24">
    <h1 class="f-text-16-24">Page Not Found</h1>
    <button class="reservation-btn hover:opacity-80 transition-65 cursor-pointer z-4 b-rounded-1.5 f-px-10-24 f-pt-8-12 f-pb-8-12 f-text-13-15" @click="handleError">Back Home</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'empty',
});

//TODO
const global = { siteTitle: '404' };

useSeo({ global });

const handleError = () => {
  clearError({ redirect: '/' });
  setTimeout(() => {
    window.location.reload();
  }, 200);
};
</script>
