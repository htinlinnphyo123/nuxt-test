<template>
  <div class="flex items-center mt-8">
    <span class="text-sm font-bold text-gray-900/75 me-2"
      >{{ filterTypeText }}
    </span>
    <button
      v-for="(item, index) in icons"
      :key="index"
      class="me-2 px-1 rounded-md border border-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-0.5 duration-200 cursor-pointer"
      :class="{ 'bg-brand-primary text-white': item.type == articleType }"
      @click="$emit('typeChange', item.type)"
      v-tooltip.top="{
        value: fieldManager(item.text,item.text_en),
      }"
    >
      <i v-if="item.icon" :class="item.icon"></i>
      <p v-else v-text="item.label"></p>
    </button>
  </div>
</template>
  
  <script setup>
import localeManage from '@/composables/Locale/localeManage';
import { computed } from 'vue';
import fieldManager from '@/composables/Locale/fieldManager';
const icons = [
  { label: "All", type: null, text: "" , text_en: "" },
  { icon: "pi pi-video", type: "video", text: "វីឌីអូ" , text_en: "Video"},
  { icon: "pi pi-images", type: "photo", text: "រូបថត" , text_en: "Photo" },
  { icon: "pi pi-headphones", type: "audio", text: "សម្លេង" , text_en: "Audio" },
  { icon: "pi pi-envelope", type: "default", text: "អត្ថបទ" , text_en: "Articles" },
];
const props = defineProps({
  articleType: String,
});
const {locale} = localeManage();
const filterTypeText = computed(()=>{
  return locale.value === 'en' ? 'Filter By Type -' : 'ត្រងតាមប្រភេទ -';
})
</script>