import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";

export default function useHomeArticleData() {
  const homeArticles = ref([]);
  const error = ref(null);
  const loading = ref(true);
  const lastPage = ref(1);

  const localizedHomeArticles = computed(() => {
    return changeLanguage(homeArticles);
  });

  const changeLanguage = (data) => {
    return data.value.map((datum) => ({
      ...datum,
      localizedTitle: fieldManager(datum.title, datum.title_other),
      localizedCategory: fieldManager(
        datum.category_name,
        datum.category_name_other
      ),
      localizedSubCategory: fieldManager(
        datum.subcategory_name,
        datum.subcategory_name_other
      ),
    }));
  };

  const fetchHomeArticleData = async ({
    category_id = null,
    paginate = 6,
    page = 1,
    reset_article = true,
  }) => {
    try {
      const response = await apiClient("home/category", {
        category_id: category_id,
        paginate: paginate,
        page: page,
      });
      if (reset_article) {
        lastPage.value = response.data.meta.last_page;
        homeArticles.value = response.data.data;
      } else {
        homeArticles.value.push(...response.data.data);
      }
      console.log(response);
    } catch (err) {
      error.value = err.response?.data?.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    localizedHomeArticles,
    error,
    lastPage,
    fetchHomeArticleData,
  };
}
