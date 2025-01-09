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
    useHead({
  title: localizedArticle.value.localizedTitle || "Loading ...",
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Read this article Now.`,
    },
    { hid: "og:title", property: "og:title", content: localizedArticle.value.localizedTitle || "Loading ..." },
    {
      hid: "og:description",
      property: "og:description",
      content: `Read this article Now.`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: localizedArticle.value.thumbnail || "default-thumbnail.jpg",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `${domainName}${route.fullPath}`,
    },
    { hid: "og:type", property: "og:type", content: "article" },
    { hid: "twitter:title", name: "twitter:title", content: localizedArticle.value.localizedTitle || "Default Title" },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: `Read this article Now.`,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: localizedArticle.value.thumbnail || "default-thumbnail.jpg",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});

    localLoading.value = false;
  },
  {
    immediate: true,
  }
);
console.log(localizedArticle)
const domainName = "https://buddhist.news";

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
