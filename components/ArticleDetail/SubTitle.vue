<template>
  <div class="flex items-center mb-2 lg:mb-4">
    <div
      class="flex items-center gap-2 text-sm text-gray-500 border-r border-gray-500 pe-2 cursor-pointer"
    >
      <i class="pi pi-calendar"></i>{{ date }}
    </div>
    <div
      class="flex items-center gap-2 text-sm text-gray-500 border-l border-gray-500 ps-2 cursor-pointer"
    >
      <i class="pi pi-user-edit"></i>{{ written_by }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  date: String,
  written_by: String,
});
</script>