<template>
  <div class="p-1">
    <BrandLogo />
    <div class="mt-4 xl:ps-1">
      <div v-for="about in props.localizedAbout" :key="about.slug" class="my-2">
        <NuxtLink
          :to="{ name: 'about' }"
          class="hover:underline hover:text-brand-secondary text-sm"
        >
          {{ about.localizedTitle }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import useFooter from "@/composables/Footer";
import BrandLogo from "../../Header/BrandLogo.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  localizedAbout: Array,
});
</script>
