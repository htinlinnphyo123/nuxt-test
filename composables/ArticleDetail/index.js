import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";

export default function useArticleDetail() {
  const article = ref([]);
  const relatedArticles = ref([]);
  const sponsorAds = ref([]);
  const error = ref(null);
  const loading = ref(true);

  const localizedRelatedArticles = computed(() => {
    return relatedArticles.value.map((article) => ({
      ...article,
      localizedTitle: fieldManager(article.title, article.title_other),
    }));
  });

  const localizedArticle = computed(() => {
    return {
      ...article.value,
      localizedTitle: fieldManager(
        article.value.title,
        article.value.title_other
      ),
      localizedDescription: fieldManager(
        article.value.description,
        article.value.description_other
      ),
      localizedCategory: fieldManager(
        article.value.category_name,
        article.value.category_name_other
      ),
      localizedSubCategory: fieldManager(
        article.value.subcategory_name,
        article.value.subcategory_name_other
      ),
    };
  });

  const fetchArticleDetail = async ({ article_id = null }) => {
    try {
      const response = await apiClient("article/detail", {
        id: article_id,
      });
      article.value = response.data.article;
      relatedArticles.value = response.data.related_articles;
      sponsorAds.value = response.data.sponsor_ads;
    } catch (err) {
      error.value = err.response?.data?.message; //?. = nullsafe
    } finally {
      loading.value = false;
    }
  };

  return {
    localizedArticle,
    localizedRelatedArticles,
    sponsorAds,
    loading,
    error,
    fetchArticleDetail,
  };
}
