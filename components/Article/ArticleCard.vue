<template>
  <TransitionGroup name="articles">
    <div
      v-for="article in props.articles"
      :key="article.id"
      class="col-span-1 rounded-md xl:hover:scale-105 shadow-xl duration-300 mb-4 lg:mb-0 card-container"
    >
      <NuxtLink :to="{ name: 'articles-id', params: { id: article.id } }">
        <CardThumbnail
          :thumbnail="article.thumbnail"
          :id="article.id"
          :alt="article.localizedTitle"
        />
        <div class="bg-white card-header">
          <CardHeader
            :category="article.localizedCategory"
            :subcategory="article.localizedSubCategory"
            :categoryShow="props.categoryShow"
            :type="article.type"
          />
        </div>
        <div
          class="flex flex-col justify-between w-full min-h-20 xl:min-h-28 px-1 lg:px-5 py-2 bg-white rounded-b-md card-footer"
        >
          <CardTitle :title="article.localizedTitle" :id="article.id" />
          <CardFooter
            :author="article.written_by"
            :date="article.date"
            :type="article.type"
          />
        </div>
      </NuxtLink>
    </div>
  </TransitionGroup>
</template>
<script setup>
import CardTitle from "./Card/TItle.vue";
import CardHeader from "./Card/Header.vue";
import CardFooter from "./Card/Footer.vue";
import CardThumbnail from "./Card/Thumbnail.vue";
const props = defineProps({
  articles: Array,
  categoryShow: {
    default: true,
    Type: Boolean,
  },
});
</script>
<style scoped>
.card-container:hover .card-header,
.card-container:hover .card-footer {
  background-color: #0000;
}
</style>
