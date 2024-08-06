<script setup>
import { groq } from '#imports'
import { ref } from 'vue'
import { global, media } from '@/utils/queries'

const query = groq`{
  ${global}
  "menusOverview": *[_type == "menusOverview"][0],
  "menus": *[_type == "menu"]|order(orderRank)[]{
    ..., 
    ${media}
  },
}`;

const menu = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
menu.value = data.value;

useSeo({ global: data.value.global, title: menu.value.menusOverview.title, seo: menu.value.menusOverview.seo });
</script>

<template>
    <div v-for="menu in menu.menus" :key="menu._id" class="menu-item-container w-full grid grid-cols-3 f-px-16-24 f-pb-10-14 f-pt-10-14 bg-dark-2 rounded-2">
      <div class="item-name flex flex-col f-gap-2-4 col-span-1 w-full col-span-2">
        <div class="flex flex-col">
            <p class="f-text-14-16 text-white">{{ menu.title }}</p>
        </div>
        <button class="f-text-11-13 text-dark-950 hover:text-orange-400 text-start transition-50 mr-auto">Order on Grubhub</button>
      </div>

      <div class="item-image rounded-2 overflow-hidden f-w-40-75 f-max-w-40-75 col-span-1 w-full items-end flex flex-row justify-end ml-auto col-span-1">
        <Media :media="menu.media" />
      </div>

    </div>
</template>

<style scoped>
.item-image {
  aspect-ratio: 1/1;
  min-height: 40px;
}
</style>