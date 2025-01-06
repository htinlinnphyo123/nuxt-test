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
