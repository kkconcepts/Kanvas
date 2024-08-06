<template>
  <NavBtn />
  <Transition enter-from-class="-translate-y-full" leave-to-class="-translate-y-full">
    <nav v-if="globalStore.isNavOpen" class="fixed inset-0 w-full h-full p-2 pt-12 duration-400 ease-out-quint z-[-6] f-p-30-60 f-pt-100-120 bg-black text-white">
      <NuxtLink v-for="page in sanityStore.global?.navigation" :key="page._id" class="block pb-3" :to="'/' + page.slug.current">
        {{ page.title }}
      </NuxtLink>
      <NuxtLink v-if="globalStore.isNavOpen" to="/join-us" class="block pb-3">
        Join us
      </NuxtLink>
      <NuxtLink v-if="globalStore.isNavOpen" to="https://www.instagram.com/kanvasusa" class="block pb-3" target="_blank" rel="noopener noreferrer">
        Follow
      </NuxtLink>
    </nav>
  </Transition>
</template>

<script setup>
const globalStore = useGlobalStore();
const sanityStore = useSanityStore();

const route = useRoute();
const { key } = useKey();

watch(
  () => route.href,
  () => {
    if (globalStore.isNavOpen) globalStore.setIsNavOpen();
  }
);

watch(key, () => {
  if (!globalStore.isNavOpen) return;
  if (key.value === 'escape') globalStore.setIsNavOpen();
});
</script>
