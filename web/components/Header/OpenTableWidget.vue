<template>
  <div class="opentable-widget" id="opentable-widget"></div>
</template>
  
<script setup>
import { onMounted } from 'vue';
  
onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//www.opentable.com/widget/reservation/loader?rid=1373008&type=button&theme=standard&color=8&dark=false&iframe=true&domain=com&lang=en-US&newtab=true&ot_source=Restaurant%20website&font=arial&ot_logo=subtle&primary_color=1a1a1a&primary_font_color=ffffff&button_color=ff6600&button_font_color=ffffff&logo_pid=66632727&background_pid=66629750&cfe=true';
  document.getElementById('opentable-widget').appendChild(script);
});
</script>
  
<style scoped>
.opentable-widget {
  z-index: 6;
  padding: 0 !important;
  margin: 0 !important;
  font-family: 'AktivGroteskRegular', sans-serif;
}

#ot-widget-container2, #ot-widget-container2 * {
  padding: 0 !important;
  margin: 0 !important;
  font-family: 'AktivGroteskRegular', sans-serif;
}
</style>