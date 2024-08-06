<template>
  <div class="wrapper">
    <div class="hero-placeholder overflow-hidden">
        <Modules :modules="data.homepage.content" />
    </div>

    <div class="hero-information flex flex-col lg:f-gap-24-32 md:lg:f-gap-24-32 sm:f-gap-16-20 f-gap-16-20 justify-center h-full items-center">
      <div class="logo-image-container f-w-240-800">
        <NuxtImg class="logo-image w-full h-full relative z-20"
          src="https://cdn.sanity.io/images/z7eg2hxx/production/4f95c6df7767a32506de9cbbfe29e0c2ed4d31e1-2966x469.png"
          quality="80"
          loading="lazy"
          format="webp"
          alt="image of Kanvas' main logo"
        />  
      </div>
      <h1 class="s-s text-center text-white f-text-13-21 lg:tracking-5.5 md:tracking-4.5 sm:tracking-3.5 tracking-2.5 uppercase">Sports <span class="text-orange-500">+</span> Social</h1>
    </div>
  </div>
</template>

<script setup>
import { global, media, blockContent, modules, seo } from '@/utils/queries';

const query = groq`{
  ${global}
  "homepage": *[_type == "homepage"][0] {
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
  "menu": *[_type == "menu"][0]{
    menus[]->{
      slug{current},
      ${media}
    }
  }
}`;

const { data } = await useSanityQuery(query);

useSeo({ global: data.value?.global });
</script>

<style scoped>
.hero-placeholder {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  z-index: 1;
}

.hero-information {
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.85);
}

.close-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
}

.hero-image {
  position: absolute;
  object-fit: cover;
}

.s-s {
  z-index: 2;
}
</style>
