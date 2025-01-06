<template>
  <li
    v-for="datum in props.articleArray"
    :key="datum.id"
    class="p-2 hover:shadow-lg hover:translate-y-1 rounded border border-transparent transition-all transition-duration-300 cursor-pointer"
  >
    <NuxtLink :to="{ name: 'articles', params: { id: datum.id } }">
      <div class="flex items-start gap-4 relative">
        <img
          v-on:load="imgLoaded(datum.id)"
          class="max-w-28 sm:max-w-36 shrink-0 rounded aspect-video object-cover"
          :src="getImageSource(datum.id, datum.thumbnail)"
          :style="{ filter: 'brightness(' + photoFilterPercent + '%)' }"
          :alt="datum.localizedTitle"
        />
        <i
          :class="props.typeIcon"
          class="absolute custom-bg p-1 text-white top-6 left-1 lg:top-2 lg:left-2"
          style="font-size: 1.5rem"
        ></i>
        <p class="lg:text-md xl:text-lg line-clamp-2 hover:text-card-secondary">
          {{ datum.localizedTitle }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>
<script setup>
import { defineProps, ref } from "vue";
import placeHolder from "@/assets/logo/place_holder.webp";

const props = defineProps({
  articleArray: Array,
  typeIcon: String,
  photoFilterPercent: {
    default: 50,
    type: Number,
  },
});

const imgLoading = ref({});
const imgLoaded = (id) => {
  imgLoading.value[id] = false;
};

const getImageSource = (id, thumbnail) => {
  return imgLoading.value[id] === false ? thumbnail : placeHolder;
};

props.articleArray.forEach((datum) => {
  imgLoading.value[datum.id] = true;
});
</script>
