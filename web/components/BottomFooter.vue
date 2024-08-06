<template>
  <div class="footer">
    <div class="bottom-nav w-full f-gap-16-32 f-px-16-24 f-pt-16-20 f-pb-16-20">
      <NuxtLink class="text-white f-text-13-15 cursor-pointer" to="https://www.opentable.com/r/kanvas-sports-and-social-dallas?corrid=ca06137e-0d1b-40a7-a526-90830bcb9e85&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2024-07-15T19%3A00%3A00">OpenTable</NuxtLink>
      <div class="menu-btn text-white f-text-13-15 cursor-pointer hover:opacity-80" @click="openModal">Our Menu</div>
      <NuxtLink class="text-white f-text-13-15 cursor-pointer" to="about-us">Contact Us</NuxtLink>
    </div>

    <transition name="fade">
      <div v-if="showModal" class="modal f-pt-75-100 f-pb-75-100">
        <div class="modal-content f-min-h-500-650 f-px-32-48 f-pb-32-48 f-pt-32-48 f-w-440-640 f-max-w-440-640 f-mt-75-100 flex flex-col justify-start items-center f-gap-16-24 rounded-2 bg-dark-950">

          <div class="menu-header-container f-gap-12-16 text-center">

            <p class="f-text-16-24 text-white">{{ page.menusOverview.title }}</p>
            <copy class="text-white f-text-13-15 leading-tight f-max-w-320-480" :blocks="page.menusOverview.description" />

            <div class="flex flex-row f-gap-4-8 items-center justify-center m-auto f-text-13-15">
              <button class="bg-dark-200 rounded-2 f-px-8-10 f-pt-4-6 f-pb-4-6 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">Appetizers</button>
              <button class="bg-dark-200 rounded-2 f-px-8-10 f-pt-4-6 f-pb-4-6 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">Entrees</button>
              <button class="bg-dark-200 rounded-2 f-px-8-10 f-pt-4-6 f-pb-4-6 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">Deserts</button>
              <button class="bg-dark-200 rounded-2 f-px-8-10 f-pt-4-6 f-pb-4-6 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">Cocktails</button>
              <button class="bg-dark-200 rounded-2 f-px-8-10 f-pt-4-6 f-pb-4-6 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">Vegetarian</button>
            </div>

          </div>

          <div class="menu-items w-full h-full flex flex-col f-gap-10-14 f-mt-24-32">
            <MenuItem />
          </div>

          <NuxtImg class="about-image hidden"
            src="https://cdn.sanity.io/images/z7eg2hxx/production/ee7ac30e62734b3b129f9b6a15eb9783325abfc0-1252x1600.jpg" 
            quality="80"
            loading="lazy"
            format="webp"
          />

          <ReservationBtn />

          <div class="close-modal-btn cursor-pointer f-p-2-4 f-mt-75-100 f-mr-24-54 rounded-2 bg-dark-200 hover:bg-dark-400 text-white hover:text-orange-400 transition-75">
            <button @click="closeModal" class="f-w-25-30 f-h-25-30 flex items-center justify-center f-text-13-15 i-mdi-close"></button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { groq } from '#imports'
import { global, media, blockContent } from '@/utils/queries'

const query = groq`{
  ${global}
  "menusOverview": *[_type == "menusOverview"][0] {
    ...,
    ${seo}
    ${media}
    description[]{
      ...,
      ${blockContent}
    },
    content[]{
      ...,
      ${modules}
    }
  },
}`;

const page = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
page.value = data.value;

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};
</script>

<style scoped>
.bottom-nav {
  display: flex;
  width: 100%;
  justify-content: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.722);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.637);
  overflow-y: auto; /* Enable vertical scrolling */
}

.modal-content {
  max-width: 140vw; /* Adjust width as needed */ /* Adjust height as needed */
  margin: auto; /* Center content horizontally */
}

.close-modal-btn {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 1;
}

.menu-header-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.menu-btn:hover {
  color: gray;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.35s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
