<template>
  <div class="mx-2 md:mx-6 lg:mx-10">
    <div class="flex items-center whitespace-nowrap w-auto gap-2">
      <h1 class="text-2xl ms-4">{{ title }}</h1>
      <div class="root-line ms-1">
        <div class="line mb-1"></div>
        <div class="line"></div>
      </div>
    </div>
    <br />
    <div
      v-if="data.length>0"
      class="md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-10"
    >
      <ArticleCard :articles="data" :categoryShow="false" />
    </div>
    <p v-else class="font-bold text-gray-600/75 text-md lg:text-lg text-center">There is no related articles .</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ArticleCard from "../Article/ArticleCard.vue";

const title = "Related Articles";
const props = defineProps({
  data: Array,
});
</script>
