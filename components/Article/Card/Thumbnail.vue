<template>
    <img
      class="w-full h-52 rounded-t-md object-cover cursor-pointer"
      :class="{ 'animate-pulse': !imgLoading }"
      v-on:load="imgLoading = true"
      :src="getImageSource"
      :alt="alt"
    />
</template>
<script setup>
import { ref, computed } from "vue";
import placeHolder from "@/assets/logo/place_holder.webp";
const props = defineProps({
  thumbnail: String,
  alt: String,
});

const imgLoading = ref(false);

const getImageSource = computed(() => {
  return imgLoading.value === true ? props.thumbnail : placeHolder;
});
</script>