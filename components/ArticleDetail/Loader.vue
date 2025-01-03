<template>
  <div class="mx-2 md:mx-6 lg:mx-10">
    <br />
    <div class="">
      <div class="flex justify-center align-middle">
        <Skeleton width="30%" height="450px" class="animate-pulse" />
      </div>
    </div>
    <br />
    <div class="">
      <Skeleton width="100%" height="400px" class="animate-pulse" />
    </div>
    <br />
    <div class="">
      <Skeleton width="100%" height="300px" class="animate-pulse" />
    </div>
    <br />
  </div>
</template>
<script setup>
import { Skeleton } from "primevue";
</script>
