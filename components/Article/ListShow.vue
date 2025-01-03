<template>
  <div v-if="props.localizedArticles.length > 0">
    <CardLayout>
      <ArticleCard :articles="localizedArticles" />
    </CardLayout>
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-center space-y-4 text-gray-800/50 text-lg text-center mt-4 lg:mt-10"
  >
    <NotFoundIcon />
    <p class="font-bold">{{ noArticleTitle }}</p>
    <p class="text-sm text-gray-600">
      {{ noArticleText }}
    </p>
  </div>
</template>
<script setup>
import CardLayout from "./CardLayout.vue";
import ArticleCard from "./ArticleCard.vue";
import NotFoundIcon from "./NotFoundIcon.vue";
import { computed } from "vue";
import localeManage from "@/composables/Locale/localeManage";
const props = defineProps({
  localizedArticles: Array,
});
const {locale} = localeManage();
const noArticleTitle = computed(()=>{
  return locale.value==='en' ? 'No Articles Available' : 'មិនមានព័ត៌មានថ្មីទេ';
})
const noArticleText = computed(()=>{
  return locale.value==='en' ? 'There are no articles related to this category at the moment. Please check back later!' : 'មិនមានព័ត៌មានថ្មី នៅក្នុងផ្នែកនេះទេ. សូមអញ្ជើមកម្តងទៀតនៅពេលក្រោយ!';
})
</script>
