<template>
  <div class="h-screen">
    <CardLayout>
      <div v-for="n in 6" :key="n" class="col-span-1 rounded-md">
        <!-- Image skeleton -->
        <Skeleton width="100%" height="300px" class="animate-pulse" />
        <!-- Text skeletons -->
        <div class="p-2">
          <Skeleton height="1.5rem" width="50%" class="animate-pulse mb-2" />
          <Skeleton height="1rem" width="100%" class="animate-pulse" />
        </div>
      </div>
    </CardLayout>
  </div>
</template>
<script setup>
import { Skeleton } from "primevue";
import CardLayout from "./CardLayout.vue";
</script>
