<template>
    <div v-if="loading === true">
      <MainLoading />
    </div>
    <div v-else class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div>
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
          @
          {{ new Date().getFullYear() }} All Right Reserved. Designed and
          Developed by
          <a
            class="underline font-bold hover:text-brand-secondary"
            href="https://bigsoft.tech"
            >Bigsoft Technology</a
          >
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { onMounted, provide, ref } from "vue";
  import FooterIndex from "@/components/Footer/Index.vue";
  import Navbar from "./components/Header/Navbar.vue";
  import useCategories from "./composables/Category";
  import MainLoading from "./components/Loading/MainLoading.vue";
  import { useToast } from "primevue/usetoast";
  import Offline from "./components/Error/Offline.vue";
  const toast = useToast();
  
  const isOnline = ref(true);
  const { localizedCategories, error, fetchCategories, loading } =
    useCategories();
  
  onMounted(async () => {
    await fetchCategories(); //async await
    window.addEventListener("offline", () => {
      isOnline.value = false;
      toast.add({
        severity: "warn",
        summary: "Oops ! ",
        detail: "You are currently Offline",
        life: 5000,
      });
    });
    window.addEventListener("online", function () {
      isOnline.value = true;
      toast.add({
        severity: "info",
        summary: "Welcome Back !",
        detail: "You are online now.",
        life: 5000,
      });
    });
  });
  provide("provideCategories", localizedCategories);
  </script>
  <style>
    .p-toast{
      z-index: 999999 !important;
    }
  </style>
  