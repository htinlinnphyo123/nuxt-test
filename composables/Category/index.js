import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";
import useLocaleManage from "../Locale/localeManage"; // Ensure you have this import

export default function useCategories() {
    const categories = ref([]);
    const error = ref(null);
    const loading = ref(true);
    const { locale } = useLocaleManage(); // Get the current locale

    const localizedCategories = computed(() => {
        return categories.value.map(category => ({
            ...category,
            localizedName: fieldManager(category.name, category.name_other),
            subcategories: category.subcategories.map(subcategory => ({
                ...subcategory,
                localizedName: fieldManager(subcategory.name, subcategory.name_other)
            }))
        }));
    });

    const fetchCategories = async () => {
        try {
            // testing delay time
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 300);
            });
            const response = await apiClient('category/index');
            // console.log(response);
            categories.value = response.data.data;
        } catch (err) {
            error.value = err.response?.data?.message;
        } finally {
            loading.value = false;
        }
    };

    return { 
        localizedCategories, 
        error, 
        fetchCategories, 
        loading 
    };
}