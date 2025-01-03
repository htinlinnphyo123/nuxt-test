import apiClient from "@/composables/main/apiClient";
import { ref } from "vue";

export default function useCategory(categoryId) {
    const categories = ref([]);
    const error = ref(null);

    const fetchCategories = async () => {
        try {
            //testing delay time
            // await new Promise((resolve)=>{
            //     setTimeout(()=>{
            //         resolve();
            //     },3000)
            //     console.log('hello world');
            // })
            const response = await apiClient("category/index");
            categories.value = response.data;
        } catch (err) {
            error.value = err.response?.data?.message; //?. = nullsafe
        }
    };

    return { categories, error, fetchCategories };
}
