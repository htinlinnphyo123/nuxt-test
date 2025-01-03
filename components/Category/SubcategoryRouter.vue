<template>
  <!-- <li class="py-0.5">
    <router-link
      :to="{ name: 'categoryDetail', params: { id: categoryId } }"
      class="hover:bg-brand-secondary w-full hover:text-white transition duration-200 block p-1 rounded-md cursor-pointer"
      :class="{
        'bg-brand-secondary text-white': route.path === `/categories/${categoryId}`
      }"
    >
      All
    </router-link>
  </li> -->
  <li v-for="sub in subcategories" class="cursor-pointer py-0.5" :key="sub.id">
    <router-link
      :to="{ name: 'categoryDetail', params: { id: categoryId, sub: sub.id } }"
      class="hover:bg-brand-secondary hover:text-white transition duration-200 block p-1 rounded-md cursor-pointer"
      :class="{
        'bg-brand-secondary text-white': isActiveSub(sub.id),
      }"
    >
      {{ sub.localizedName }}
    </router-link>
  </li>
</template>

<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  categoryId: String,
  subcategories: Array,
});

const route = useRoute();

const isActiveSub = (subId) => {
  return route.params.sub === subId;
};
</script>
