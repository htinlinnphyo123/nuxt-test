<template>
  <div class="lg:ms-auto lg:me-4">
    <h1 class="md:text-lg mb-4 select-none">{{ followUsText }}</h1>
    <div class="mx-auto md:mx-0 flex flex-wrap gap-4 md:block">
      <a
        v-for="soc in props.social"
        :href="soc.value"
        target="_blank"
        :key="soc.key"
        class="cursor-pointer py-1 rounded-2xl flex items-center gap-2 text-xs"
      >
        <i :class="soc.icon"
        class="bg-gray-50 rounded-full p-0.5"
        style="font-size:16px"
        :style="{ color: soc.color}"></i>
        <span v-text="soc.key" class="text-white tracking-widest"></span>
      </a>
    </div>
  </div>
</template>
<script setup>
import localeManage from '@/composables/Locale/localeManage';
import { computed } from 'vue';

const props = defineProps({
  social: Array,
});
const {locale} = localeManage();
const followUsText = computed(()=>{
  return locale.value === 'en' ? 'Follow Us' : 'បណ្តាញសង្គម';
})
</script>