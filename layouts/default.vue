<template>
  <div class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
    <Navbar />
    <div class="min-h-[50vh] max-w-[1440px] mx-auto">
      <Toast />
      <div v-if="isOnline">
        <slot />
      </div>
      <div v-else>
        <Offline />
      </div>
    </div>
    <FooterIndex />
    <div
      class="text-sm italic col-span-2 md:col-span-4 text-center bg-[#123174] py-2 lg:py-4 text-white"
    >
      @ {{ new Date().getFullYear() }} All Rights Reserved. Designed and
      Developed by
      <a
        class="underline font-bold hover:text-brand-secondary"
        href="https://bigsoft.tech"
      >
        Bigsoft Technology
      </a>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Header/Navbar.vue";
import FooterIndex from "@/components/Footer/Index.vue";
import Offline from "@/components/Error/Offline.vue";
import { useState } from "#app";
import useCategories from "~/composables/Category";
import { onMounted } from "vue";

// Global online status
const isOnline = useState("isOnline", () => true);

const { localizedCategories, error, fetchCategories, loading } =
  useCategories();
onMounted(async () => {
  await fetchCategories(); //async await
});
provide("provideCategories", localizedCategories);
</script>

<style>
.p-toast {
  z-index: 999999 !important;
}
</style>
