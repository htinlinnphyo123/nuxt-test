import apiClient from "@/composables/main/apiClient";
import { ref, computed } from "vue";
import fieldManager from "../Locale/fieldManager";

export default function useFooter() {
    const categories = ref([]);
    const error = ref(null);
    const loading = ref(true);
    const social = ref([]);
    const about = ref([]);

    const localizedCategories = computed(() => {
        return categories.value.map(category => ({
            id : category.id,
            localizedName: fieldManager(category.name, category.name_other),
            articles_count : category.articles_count
        }));
    });

    const localizedAbout = computed(()=>{
        return about.value.map(about=>({
            ...about,
            localizedTitle: fieldManager(about.title,about.title_other),
        }))
    })

    const fetchFooterData = async () => {
        try {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 300);
            });
            const response = await apiClient("page/footer");
            const {about:aboutData,social:socialData,category:categoryData} = response.data;
            categories.value = categoryData.data;
            social.value = socialData.data;
            about.value = aboutData.data;
        } catch (err) {
            error.value = err.response?.data?.message;
        } finally {
            loading.value = false;
        }
    };

    return { 
        localizedCategories, 
        social,
        localizedAbout,
        error, 
        fetchFooterData, 
        loading 
    };
}