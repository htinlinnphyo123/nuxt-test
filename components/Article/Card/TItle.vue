<template>
  <p
    class="font-bold text-md cursor-pointer hover:text-card-secondary mb-2 line-clamp-2 lg:text-md xl:text-lg"
  >
    {{ props.title }}
  </p>
</template>
<script setup>
const props = defineProps({
  title: String,
});
</script>