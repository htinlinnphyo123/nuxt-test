<template>
  <img
    :src="thumbnail"
    :alt="name"
    class="w-auto rounded-md mx-auto mb-3 shadow-2xl"
  />
</template>
<script setup>
const props = defineProps({
  thumbnail: String,
  name: String,
});
</script>
