<script setup>
import Loader from "@/components/ArticleDetail/Loader.vue";
import ShowMedia from "@/components/ArticleDetail/ShowMedia.vue";
import useArticleDetail from "@/composables/ArticleDetail";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

const route = useRoute();
const localLoading = ref(false);

const {
  localizedArticle,
  localizedRelatedArticles,
  sponsorAds,
  loading,
  fetchArticleDetail,
} = useArticleDetail();

onMounted(() => {
  fetchArticleDetail({ article_id: route.params.id });
});

const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => $fetch('https://admin.buddhish.news/api/v1/spa/article/detail', {
    method:'POST',
    params: {
      id: '10003NDgy10003'
    }
  }), {
    watch: [page]
  }
)
console.log(posts.value.data.article);

watch(
  () => route.params.id,
  async (newId, oldId) => {
    localLoading.value = true;
    if (newId !== oldId) {
      await fetchArticleDetail({ article_id: newId });
    }
    localLoading.value = false;
  }
);
// Set meta tags dynamically for article page page
watch(posts.value.data.article,(newArticle)=>{
  useHead(() => ({
    title: newArticle.title,
    meta: [
      { property: "og:title", content: newArticle.title },
      { property: "og:image", content: newArticle.thumbnail },
      {
        property: "twitter:title",
        content: newArticle.title,
      },
      { property: "twitter:image", content: newArticle.thumbnail },
    ],
  }));
},{immediate:true,deep:true})
</script>

<template>
  <div>
    <div v-if="loading === true || localLoading == true">
      <Loader />
    </div>
    <div v-else>
      <br />
      <ShowMedia
        :data="localizedArticle"
        :relatedData="localizedRelatedArticles"
        :sponsorData="sponsorAds"
      />
    </div>
  </div>
</template>
