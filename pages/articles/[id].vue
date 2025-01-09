<script setup>
import Loader from "@/components/ArticleDetail/Loader.vue";
import ShowMedia from "@/components/ArticleDetail/ShowMedia.vue";
import useArticleDetail from "@/composables/ArticleDetail";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
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
const head = computed(() => {
  if (localizedArticle.value) {
    const article = localizedArticle.value;
    return {
      title: `${article.title} - My Website`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: 'Hello',
        },
        { hid: "og:title", property: "og:title", content: article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: 'Hello',
        },
        {
          hid: "og:image",
          property: "og:image",
          content: article.thumbnail,
        },
        { hid: "og:url", property: "og:url", content: window.location.href },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "twitter:title", name: "twitter:title", content: article.title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: 'Hello',
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
      link: [{ rel: "canonical", href: window.location.href }],
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
