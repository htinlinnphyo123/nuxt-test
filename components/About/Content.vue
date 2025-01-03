<template>
  <AboutPageLayout>
    <AboutList :localizedPage="localizedPage" />
    <img
      src="https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/funding_bc.jpeg"
      class="w-1/2 lg:w-1/4 rounded-xl cursor-pointer shadow-2xl mx-auto"
    />
  </AboutPageLayout>
</template>
<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import AboutPageLayout from "./AboutPageLayout.vue";
import AboutList from "./AboutList.vue";
import { useRoute } from "vue-router";
const props = defineProps({
  localizedPage: Array,
});

//Sorted about to the last array becoz if the page is above , i want to get #about
const route = useRoute();

function goToElementView(hash){
  const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
    }
}

onMounted(() => {
  const hash = window.location.hash;
  if (hash) {
    goToElementView(hash)
  }
});

watch(
  () => route.hash,
  (newHash) => {
    goToElementView(newHash);
  }
);
</script>