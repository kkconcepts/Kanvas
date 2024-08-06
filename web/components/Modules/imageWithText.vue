<template>
    <section class="text-white copy-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:h-100vh md:h-100vh sm:h-100% h-100% w-full">
        <Media class="col-span-1" v-for="media in module?.assets" :key="media._id" :media="media"/>
        <div class="col-span-1 sm:h-100vh lg:h-100vh md:h-100vh sm:h-60vh h-60vh flex flex-col w-full items-center justify-center f-gap-8-12 bg-black">
            <p class="module-title w-full text-center text-white f-text-16-24 uppercase">{{ module?.title || title }}</p>
            <div class="block-content-container f-text-13-15 f-max-w-280-490 leading-tight text-center">
                <BlockContent :blocks="module?.text || blocks" />
            </div>
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
.copy-container {
width: 100%;
height: 100vh;
}
</style>