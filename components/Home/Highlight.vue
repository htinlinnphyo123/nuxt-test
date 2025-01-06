<template>
  <div class="mx-3">
    <div class="flex items-center whitespace-nowrap w-auto gap-2">
      <NuxtLink
        :to="{ name: 'categories-id', params: { id: categoryData.id } }"
        class="ms-2 text-3xl hover:underline"
        :style="{ color: categoryData.color_code}"
        >
        {{ categoryData?.localizedName }}
      </NuxtLink>
    </div>
    <br />
    <div
      class="md:grid md:grid-cols-2 xl:grid-cols-3 justify-center items-stretch gap-6"
    >
      <div class="col-span-2">
        <div
          class="md:grid md:grid-cols-2 justify-center items-stretch gap-10 mb-4 lg:mb-8"
        >
          <ArticleCard :articles="data" :categoryShow="true" />
        </div>
      </div>
      <div class="col-span-2 xl:col-span-1 mt-10 xl:mt-0">
        <div v-if="videoData?.length > 0">
          <ul
            class="list-none border border-gray-300 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
          >
            <div class="absolute px-2 bg-gray-100" style="top: -1rem">
              <h1 class="text-2xl">{{ videoTitle }}</h1>
            </div>
            <HorizontalArticleCard
              :articleArray="videoData"
              typeIcon="pi pi-video"
            />
          </ul>
        </div>

        <br />
        <div v-if="audioData?.length > 0">
          <ul
            class="list-none border border-gray-300 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative mt-0 md:mt-3"
          >
            <div class="absolute px-2 bg-gray-100" style="top: -1rem">
              <h1 class="text-2xl">{{ audioTitle }}</h1>
            </div>
            <HorizontalArticleCard
              :articleArray="audioData"
              typeIcon="pi pi-headphones"
            />
          </ul>
        </div>
      </div>
    </div>
    <NuxtLink
      :to="{ name: 'categories-id', params: { id: categoryData.id } }"
      class="custom-view-more"
    >
      {{ viewMore }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, watch } from "vue";
import ArticleCard from "../Article/ArticleCard.vue";
import HorizontalArticleCard from "../Article/HorizontalArticleCard.vue";
import localeManage from "@/composables/Locale/localeManage";

const title = "Highlight";
const props = defineProps({
  categoryData: Object,
  data: Array,
  videoData: Array,
  audioData: Array,
});

const {locale} = localeManage();

const viewMore = computed(()=>{
  return locale.value === "en" ? "View More" : "ព័ត៌មានបន្ថែម";
})
const videoTitle = computed(()=>{
  return locale.value === "en" ? "Videos" : "វីឌីអូ";
})
const audioTitle = computed(()=>{
  return locale.value === "en" ? "Audios" : "សម្លេង";
})
</script>
<style @scoped></style>
