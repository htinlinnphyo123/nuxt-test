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
      class="md:grid md:grid-cols-2 xl:grid-cols-3 justify-center items-stretch gap-10"
    >
      <div class="col-span-2">
        <div
          class="md:grid md:grid-cols-3 xl:grid-cols-2 justify-center items-stretch gap-10 mb-4 lg:mb-8"
        >
          <ArticleCard :articles="data" :categoryShow="true" />
        </div>
        <router-link :to="{ name: 'latestArticle' }" class="custom-view-more">
          {{ viewMore }}
        </router-link>
      </div>
      <div class="col-span-2 xl:col-span-1 mt-10 xl:mt-0">
        <ul
          class="list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
        >
          <div class="absolute px-2 bg-gray-100" style="top: -1rem">
            <h1 class="text-3xl font-semibold">{{ topViews }}</h1>
          </div>
          <HorizontalArticleCard :articleArray="topViewData" />
        </ul>
        <br/><br/>
        <ul
          class="list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
        >
          <div class="absolute px-2 bg-gray-100" style="top: -1rem">
            <h1 class="text-3xl font-semibold">{{ audioTitle }}</h1>
          </div>
          <HorizontalArticleCard
            :articleArray="audioData"
            typeIcon="pi pi-microphone"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import ArticleCard from "../Article/ArticleCard.vue";
import HorizontalArticleCard from "../Article/HorizontalArticleCard.vue";

const viewMore = "View More";
const title = "Latest Articles";
const audioTitle = "Audios";
const topViews = "Top Views";
const props = defineProps({
  data: Array,
  topViewData: Array,
  audioData: Array,
});
</script>
<style @scoped>
.custom-bg {
  background-color: rgba(140, 147, 153, 0.568);
  border-radius: 2rem;
}
</style>
