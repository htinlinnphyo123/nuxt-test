<script setup>
import Loader from "@/components/ArticleDetail/Loader.vue";
import ShowMedia from "@/components/ArticleDetail/ShowMedia.vue";
import useArticleDetail from "@/composables/ArticleDetail";
import { watch, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

const route = useRoute();
const localLoading = ref(false);

const {
  localizedArticle,
  localizedRelatedArticles,
  sponsorAds,
  error,
  loading,
  fetchArticleDetail,
} = useArticleDetail();

watch(
  () => route.params.id,
  async (newId) => {
    localLoading.value = true;
    // console.log("hey");
    await fetchArticleDetail({ article_id: newId });
    localLoading.value = false;
  },
  {
    immediate: true,
  }
);
const domainName = "https://buddhist.news/";
const head = computed(() => {
  if (localizedArticle.value) {
    const article = localizedArticle.value;
    // console.log(article);
    return {
      title: article.title || 'Loading...',
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Read More`,
        },
        { hid: "og:title", property: "og:title", content: article.title || 'Loading...' },
        {
          hid: "og:description",
          property: "og:description",
          content: `Read More`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: article.thumbnail,
        },
        { hid: "og:url", property: "og:url", content: `${domainName}${route.fullPath}` },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "twitter:title", name: "twitter:title", content: article.title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `Read More`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: article.thumbnail,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  }
  return {};
});
useHead(head);


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
