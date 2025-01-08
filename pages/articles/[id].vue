<script setup>
import Loader from "@/components/ArticleDetail/Loader.vue";
import ShowMedia from "@/components/ArticleDetail/ShowMedia.vue";
import useArticleDetail from "@/composables/ArticleDetail";
import { onMounted, watch, ref, computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";

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

onMounted(async () => {
  await fetchArticleDetail({ article_id: route.params.id });
});

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

const head = computed(() => {
  if (localizedArticle.value) {
    const article = localizedArticle.value;
    return {
      title: `${article.title} - My Website`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: article.excerpt || article.content,
        },
        { hid: "og:title", property: "og:title", content: article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: article.excerpt || article.content,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: article.imageUrl,
        },
        { hid: "og:url", property: "og:url", content: window.location.href },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "twitter:title", name: "twitter:title", content: article.title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: article.excerpt || article.content,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: article.imageUrl,
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
