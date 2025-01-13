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

const page = ref(1);
const { data: posts } = await useAsyncData(
  "posts",
  () =>
    $fetch("https://admin.buddhish.news/api/v1/spa/article/detail", {
      method: "POST",
      params: {
        id: route.params.id,
      },
    }),
  {
    watch: [page],
  }
);
useHead(() => ({
  title: posts.value.data.article.title,
  meta: [
    { property: "og:title", content: posts.value.data.article.title },
    { property: "og:image", content: posts.value.data.article.thumbnail },
    {
      property: "twitter:title",
      content: posts.value.data.article.title,
    },
    { property: "twitter:image", content: posts.value.data.article.thumbnail },
  ],
}));
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
