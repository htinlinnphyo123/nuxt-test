<template>
  <ul
    class="bg-brand-primary shadow-lg text-white leading-9 font-bolder min-h-screen px-2 pt-10 tracking-wider flex flex-col divide-y divide-gray-600"
  >
    <li
      v-for="category in categories"
      :key="category.id"
      class="relative parent-d-menu text-sm py-2 xl:py-0"
    >
      <CategoryRouter
        :isHome="category.name === 'ទំព័រដើម'"
        :categoryId="category.id"
        :localizedName="category.localizedName"
      />
      <ul
        v-if="category.name !== 'ទំព័រដើម'"
        class="xl:absolute child-d-menu xl:bg-white p-3 w-full xl:w-60 top-full transform scale-0 origin-top transition duration-500 shadow-inner xl:border border-gray-100 rounded-lg"
      >
        <li
          v-for="sub in category.subcategories"
          class="cursor-pointer py-0.5"
          :key="sub.id"
        >
          <NuxtLink
            :to="{ name: 'categories-id', params: { id: category.id } }"
            class="hover:bg-brand-secondary hover:text-white transition duration-200 block p-1 rounded-md cursor-pointer"
            :class="{
              'bg-brand-secondary text-white': isActiveSub(sub.id),
            }"
          >
            {{ sub.localizedName }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import CategoryRouter from '../Category/CategoryRouter.vue';
import { useRoute } from 'vue-router';
const props = defineProps({
  categories: Array,
});
const route = useRoute();

const isActiveSub = (subId) => {
  return route.params.sub === subId;
};

</script>
<style>
.parent-d-menu:hover .child-d-menu {
  transform: scale(1);
}
/* .parent-d-menu:hover i{
    transform: rotate(180deg);
  } */
</style>

