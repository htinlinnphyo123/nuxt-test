<template>
  <div class="lg:flex lg:justify-between lg:items-center text-sm mt-2 lg:mt-4 font-[1500] text-black/50">
    <p class="flex items-center mb-3 md:mb-0">
      <i class="pi pi-user me-2"></i>
      <span v-text="author"></span>
    </p>
    <p class="flex md:justify-end items-center">
      <i class="pi pi-clock me-2"></i>
      <span v-text="date"></span>
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  author: String,
  date: String,
});
</script>