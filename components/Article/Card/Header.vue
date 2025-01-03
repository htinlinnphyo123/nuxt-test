<template>
  <div class="px-1 lg:px-5 pt-2 flex justify-between items-center" v-if="categoryShow">
    <div class="flex items-start gap-2 text-sm">
      <p v-text="category"></p>
      <p v-if="subcategory">></p>
      <p v-text="subcategory"></p>
    </div>
    <TypeIcon :type="type" />
  </div>
</template>
<script setup>
import TypeIcon from "./TypeIcon.vue";
const props = defineProps({
  category: String,
  subcategory: String,
  categoryShow: Boolean,
  type: String,
});
</script>