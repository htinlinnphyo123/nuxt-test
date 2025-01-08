<script setup>
import Loader from "@/components/ArticleDetail/Loader.vue";
import ShowMedia from "@/components/ArticleDetail/ShowMedia.vue";
import useArticleDetail from "@/composables/ArticleDetail";
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import MetaHeader from "~/components/MetaTag/MetaHeader.vue";

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

</script>

<template>
  <div>
    <MetaHeader :title="localizedArticle.title"
      :thumbnail="localizedArticle.thumbnail" />
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
