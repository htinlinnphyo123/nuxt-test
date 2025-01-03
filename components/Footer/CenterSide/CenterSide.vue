<template>
    <div class="lg:mx-auto flex flex-col">
        <h1 class="text-sm md:text-md lg:text-lg mb-4">{{ categoryTitle }}</h1>
        <div v-for="category in props.localizedCategories" 
            :key="category.localizedName"
            class="my-1">
            <router-link :to="{ name: 'categoryDetail', params: { id: category.id } }"
                class="inline-block hover:underline hover:text-brand-secondary select-none">
                {{ category.localizedName }} ({{ category.articles_count }})
            </router-link>
        </div>
    </div>
</template>
<script setup>
    import localeManage from '@/composables/Locale/localeManage';
    import { computed } from 'vue';

    const props = defineProps({
        localizedCategories:Array
    })
    const {locale} = localeManage();
    const categoryTitle = computed(() => {
        return locale.value==='en' ? 'Categories' : 'មាតិកាព័ត៌មាន';
    });
</script>