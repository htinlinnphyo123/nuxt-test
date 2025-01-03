<template>
  <div class="bg-brand-primary">
    <div
      class="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center px-2 xl:px-0 gap-10 lg:gap-x-32 text-white py-4 lg:py-8"
    >
      <LeftSide :localizedAbout="localizedAbout" />
      <DownloadUs />
      <CenterSide :localizedCategories="localizedCategories" />
      <RightSide :social="social" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import LeftSide from "./LeftSide/LeftSide.vue";
import RightSide from "./Rightside/RightSide.vue";
import useFooter from "@/composables/Footer";
import CenterSide from "./CenterSide/CenterSide.vue";
import DownloadUs from "./DownloadUs.vue";

const { localizedCategories, social, localizedAbout, fetchFooterData } =
  useFooter();

onMounted(() => {
  fetchFooterData();
});
</script>
