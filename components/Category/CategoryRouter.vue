<template>
  <div class="select-none text-white h-9 cursor-pointer">
    <NuxtLink
      to="/"
      v-if="isHome"
      class="hover:bg-brand-secondary/75 transition duration-200 h-full flex items-center rounded-lg px-4"
      :class="{'bg-brand-secondary hover:text-white':route.path == '/'}"
    >
      <span>{{ localizedName }}</span>
    </NuxtLink>
    <p
      v-else
      class="hover:bg-brand-secondary/75 transition duration-200 h-full flex items-center px-4 tracking-wide rounded-lg"
      :class="{'bg-brand-secondary hover:text-white active':route.path == checkCatCurrentLink}"
    >
      <span>{{ localizedName }}</span>
      <i class="pi pi-chevron-down ps-4 xl:ps-0.5 transition duration-500"></i>
    </p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  categoryId: String,
  isHome: Boolean,
  localizedName: String,
});
const checkCatCurrentLink = computed(() => {
  if (route.params.sub) {
    return `/categories/${props.categoryId}/${route.params.sub}`;
  }
  return `/categories/${props.categoryId}`;
});
</script>
<style scoped>
  .pi{
    font-size:0.7rem;
  }
</style>