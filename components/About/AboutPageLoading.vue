<template>
    <div class="h-screen">
        <div v-for="n in 2" :key="n">         
            <AboutPageLayout>
              <Skeleton height="1.5rem" width="50%" class="animate-pulse mb-2" />
              <Skeleton height="1rem" width="80%" class="animate-pulse my-2" />
              <Skeleton height="1rem" width="80%" class="animate-pulse my-2" />
              <Skeleton height="1rem" width="80%" class="animate-pulse my-2" />
              <Skeleton height="1rem" width="80%" class="animate-pulse my-2" />
              <Skeleton height="1.5rem" width="50%" class="animate-pulse my-2" />
              <Skeleton height="1rem" width="80%" class="animate-pulse my-2" />
      
            </AboutPageLayout>
        </div>
    </div>
  </template>
  
  <script setup>
  import AboutPageLayout from "./AboutPageLayout.vue";
  import { Skeleton } from "primevue";
  </script>
  