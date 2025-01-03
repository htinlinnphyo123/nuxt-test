import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";

export default function useHomeData() {
  const topSponsorAds = ref([]);
  const flashNews = ref([]);
  const bannerNews = ref([]);
  const topLatestArticles = ref([]);
  const sponsorAds = ref([]);
  const homeArticles = ref([]);
  const error = ref(null);
  const loading = ref(true);

  const localizedFlashNews = computed(() => {
    return changeLanguage(flashNews);
  });
  const localizedBannerNews = computed(() => {
    return changeLanguage(bannerNews);
  });
  const localizedTopLatestArticles = computed(() => {
    return changeLanguage(topLatestArticles);
  });

  const localizedHomeArticles = computed(() => {
    return homeArticles?.value?.map((homeArticle) => ({
      ...homeArticle,
      category_info: {
        ...homeArticle.category_info,
        localizedName: fieldManager(
          homeArticle.category_info.name,
          homeArticle.category_info.name_other
        ),
      },
      articles: homeArticle.articles?.map((datum) => ({
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
      })),
      videos: homeArticle.videos?.map((datum) => ({
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
      })),
      audios: homeArticle.audios?.map((datum) => ({
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
      })),
    }));
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

  const fetchHomeData = async () => {
    try {
      const response = await apiClient("home/index");

      topSponsorAds.value = response.data.top_sponsor_ads;
      flashNews.value = response.data.flash_news;
      bannerNews.value = response.data.banner_news;
      topLatestArticles.value = response.data.top_latest_article;
      sponsorAds.value = response.data.sponsor_ads;
      homeArticles.value = response.data.home_articles;
    } catch (err) {
      error.value = err.response?.data?.message; //?. = nullsafe
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    localizedFlashNews,
    topSponsorAds,
    localizedBannerNews,
    localizedTopLatestArticles,
    sponsorAds,
    localizedHomeArticles,
    error,
    fetchHomeData,
  };
}
