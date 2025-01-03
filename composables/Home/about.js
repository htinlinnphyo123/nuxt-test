import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";
import useLocaleManage from "../Locale/localeManage"; // Ensure you have this import

export default function useAboutPage() {
  const error = ref(null);
  const loading = ref(true);
  const { locale } = useLocaleManage(); // Get the current locale
  const pages = ref([]);
  const icon = ['pi-info-circle','pi-shield','pi-heart-fill']
  const pageOrder = ['about', 'privacy_policy', 'funding'];

  const localizedPage = computed(() => {
    return pages.value
        .sort((a, b) => pageOrder.indexOf(a.slug) - pageOrder.indexOf(b.slug))
        .map((page) =>{
            const getIndex = pageOrder.indexOf(page.slug); 
            const getIcon = icon[getIndex];
            const iconTitle = `<i class="pi ${getIcon} me-2"></i>`
            return {
                ...page,
                localizedTitle:  iconTitle + fieldManager(page.title, page.title_other),
                localizedDescription: fieldManager(
                    page.description,
                    page.description_other
                ),
                };
            })
  });

  const fetchAbout = async () => {
    try {
      // testing delay time
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      const response = await apiClient("page/detail");
      pages.value = response.data;
      // console.log(pages.value);
    } catch (err) {
      error.value = err.response?.data?.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    localizedPage,
    error,
    fetchAbout,
    loading,
  };
}
