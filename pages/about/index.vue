<template>
  <div class="min-h-screen pt-4 lg:pt-8 px-2 lg:px-8 mt-4">
    <div v-if="loading">
      <AboutPageLoading />
    </div>
    <div v-else>
      <Content :localizedPage="localizedPage" />
    </div>
  </div>
</template>
<script setup>
import useAboutPage from "@/composables/Home/about";
import AboutPageLoading from "@/components/About/AboutPageLoading.vue";
import Content from "@/components/About/Content.vue";
import { onMounted } from "vue";
const { localizedPage, error, fetchAbout, loading } = useAboutPage();
onMounted(() => {
  fetchAbout();
});
</script>
