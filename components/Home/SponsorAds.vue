<template>
  <div class="flex flex-col justify-center items-center gap-2 mb-4 md:mb-8">
    <a
      class="mx-3 text-center inline"
      v-for="(datum, index) in data"
      :href="datum.link"
      :key="index"
      target="_blank"
    >
      <img
        v-if="datum.position === 'Header'"
        @load="imgLoaded(datum.id)"
        :src="getImageSource(datum.id, datum.thumbnail_image)"
        alt=""
        class="object-cover mx-auto w-11/12"
      />

      <img
        v-if="datum.position === 'Center'"
        @load="imgLoaded(datum.id)"
        :src="getImageSource(datum.id, datum.thumbnail_image)"
        alt=""
        class="object-cover mx-auto w-11/12"
      />

      <img
        v-if="datum.position === 'Footer'"
        @load="imgLoaded(datum.id)"
        :src="getImageSource(datum.id, datum.thumbnail_image)"
        alt=""
        class="object-cover mx-auto w-11/12"
      />
    </a>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from "vue";
import placeHolder from "@/assets/logo/banner970-90.png";

const props = defineProps({
  data: Array,
});

const imgLoading = ref({});

const imgLoaded = (id) => {
  imgLoading.value[id] = false;
};

const getImageSource = (id, thumbnail) => {
  return imgLoading.value[id] === false ? thumbnail : placeHolder;
};

watch(
  () => props.data,
  (newData) => {
    if (newData && Array.isArray(newData)) {
      newData.forEach((datum) => {
        imgLoading.value[datum.id] = true;
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped></style>
