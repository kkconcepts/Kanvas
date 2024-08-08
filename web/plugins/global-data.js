import { useSanityStore } from '../stores/sanityStore';

export default defineNuxtPlugin((nuxtApp) => {
  const sanityStore = useSanityStore(nuxtApp.$pinia);
  sanityStore.setGlobal();
});
