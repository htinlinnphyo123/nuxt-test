import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";

export default function useArticles() {
  const articles = ref([]);
  const error = ref(null);
  const loading = ref(true);
  const lastPage = ref(1);

  const localizedArticles = computed(() => {
    return articles.value.map((article) => ({
      ...article,
      localizedTitle: fieldManager(article.title, article.title_other),
      localizedDescription: fieldManager(
        article.description,
        article.description_other
      ),
      localizedCategory: fieldManager(
        article.category_name,
        article.category_name_other
      ),
      localizedSubCategory: fieldManager(
        article.subcategory_name,
        article.subcategory_name_other
      ),
    }));
  });

  const fetchArticles = async ({
    category_id = null,
    subcategory_id = null,
    is_banner = null,
    is_highlighed = null,
    type = null,
    paginate = 6,
    page = 1,
    resetArticle = true
  }) => {
    try {
      // console.log("API IS Called");
      const response = await apiClient("article/index", {
        category_id: category_id,
        subcategory_id: subcategory_id,
        is_banner: is_banner,
        type: type,
        is_highlighed: is_highlighed,
        paginate: paginate,
        page: page
      });
      if(resetArticle){
        lastPage.value = response.data.meta.last_page;
        // for category change and subcategory change
        articles.value = response.data.data;
      }else{
        // console.log(lastPage.value)
        //for scroll animation loading
        articles.value.push(...response.data.data);
      }
      // console.log(response.data.meta)
    } catch (err) {
      error.value = err.response?.data?.message; //?. = nullsafe
    } finally {
      loading.value = false;
    }
  };

  return { localizedArticles, error, fetchArticles, loading , lastPage };
}
