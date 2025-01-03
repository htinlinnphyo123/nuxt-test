<template>
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
        <SubcategoryRouter :categoryId="category.id" :subcategories="category.subcategories" />
      </ul>
    </li>
</template>

<script setup>
import CategoryRouter from "./CategoryRouter.vue";
import SubcategoryRouter from "./SubcategoryRouter.vue";

const props = defineProps({
  categories: Array,
});

</script>
<style>
  .parent-d-menu:hover .child-d-menu{
    transform: scale(1);
  }
  /* .parent-d-menu:hover i{
    transform: rotate(180deg);
  } */
</style>

