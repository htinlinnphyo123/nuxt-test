<template>
  <div class="mx-3">
    <div class="flex items-center whitespace-nowrap w-auto gap-2">
      <h1 class="text-2xl ms-4">{{ title }}</h1>
      <div class="root-line ms-1">
        <div class="line mb-1"></div>
        <div class="line"></div>
      </div>
    </div>
    <br />
    <div
      class="md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-10"
    >
      <ArticleCard :articles="data" :categoryShow="true" />
    </div>
    <br />
    <router-link :to="{ name: 'homeArticleViewMore' }" class="custom-view-more">
      {{ viewMore }}
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ArticleCard from "../Article/ArticleCard.vue";

const title = "Editor Pick";
const viewMore = "View More";
const props = defineProps({
  data: Array,
});
</script>
<style @scoped>
.root-line {
  width: 100%;
}
.line {
  height: 2px;
  background-color: black;
  opacity: 0.4;
}
</style>
