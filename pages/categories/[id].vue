<template>
  <div class="mx-2 md:mx-6 lg:mx-10">
    <!-- <SubcategoriesList :categoryId="route.params.categoryId" @subcategory-change="(id)=>subcategoryId=id" /> -->
    <TypeFilter
      :articleType="articleType"
      @type-change="(type) => (articleType = type)"
    />
    <ArticleIndex
      :categoryId="route.params.id"
      :subcategoryId="subcategoryId"
      :type="articleType"
      @article-not-found="subcategoryTypeShow = false"
    />
  </div>
</template>
  
  <script setup>
import SubcategoriesList from "@/components/Category/SubcategoriesList.vue";
import ArticleIndex from "@/components/Article/Index.vue";
import TypeFilter from "@/components/Article/TypeFilter.vue";
import { useRoute } from "vue-router";
import { ref, watch , inject } from "vue";

const route = useRoute();
const subcategoryId = ref(route.params.subId);
const articleType = ref(null);
const categories = inject(['provideCategories']);

watch(
  () => route.params.id,
  function () {
    subcategoryId.value = "";
    articleType.value = null;
    const getCategory = categories.value.filter(function(category){
      return category.id === route.params.id;
    })[0];
    useHead({
      title: `${getCategory.name} - BC News`,
      meta: [
        {
          name: "description",
          content: `Explore articles in category ${getCategory.name}.`,
        },
        { name: "keywords", content: `category, ${route.params.id}, articles` },
      ],
    });
  },
  { immediate: true }
);

watch(
  () => route.params.subId,
  function () {
    subcategoryId.value = route.params.subId;
    articleType.value = null;
  },
  { immediate: true }
);
</script>