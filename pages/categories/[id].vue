<template>
    <div class="mx-2 md:mx-6 lg:mx-10">
      <!-- <SubcategoriesList :categoryId="route.params.categoryId" @subcategory-change="(id)=>subcategoryId=id" /> -->
      <TypeFilter :articleType="articleType" @type-change="(type)=>articleType=type"/>
      <ArticleIndex :categoryId="route.params.id" :subcategoryId="subcategoryId" :type="articleType" @article-not-found="subcategoryTypeShow=false"/>
    </div>
  </template>
  
  <script setup>
  import SubcategoriesList from '@/components/Category/SubcategoriesList.vue';
  import ArticleIndex from '@/components/Article/Index.vue';
  import TypeFilter from '@/components/Article/TypeFilter.vue';
  import { useRoute } from 'vue-router';
  import { ref, watch } from 'vue';
  
  const route = useRoute();
  const subcategoryId = ref(route.params.subId);
  const articleType = ref(null);
  
  watch(() => route.params.id, function() {
    subcategoryId.value = '';
    articleType.value = null;
  }, { immediate: true });
  
  watch(() => route.params.subId, function() {
    subcategoryId.value = route.params.subId;
    articleType.value = null;
  }, { immediate: true });
  </script>