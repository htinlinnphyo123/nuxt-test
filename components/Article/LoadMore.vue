<template>
  <div class="flex py-4 lg:py-10">
    <div class="w-full h-0.5 bg-brand-primary/25 mt-2.5"></div>
    <!-- First To check no more articles -->
    <p class="w-full text-center select-none" v-if="noMoreArticle">
      You are all caught up.
    </p>
    <!-- if there is article -->
    <button
      v-else
      id="load-more"
      class="w-full text-center font-bold text-gray-800"
      :disabled="startLoading"
      @click="loadMore"
      :class="{ 'cursor-progress': startLoading }"
    >
      <!-- When user click Load More , will showing loading animation -->
      <div
        v-if="startLoading"
        class="animate-pulse flex justify-center items-center"
      >
        <i class="pi pi-spin pi-spinner" style="font-size: 1.5rem"></i
        ><span class="ms-4">Loading</span>
      </div>
      <!-- When the fetch is complete, it will appear load More -->
      <span v-else>Load More</span>
    </button>
    <div class="w-full h-0.5 bg-brand-primary/25 mt-2.5"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  startLoading: Boolean,
  lastPage: Number,
  noMoreArticle: Boolean,
});
const emit = defineEmits(["loadMoreArticle"]);
function loadMore() {
//   console.log("hello world");
  emit("loadMoreArticle");
}
</script>