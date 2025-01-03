<template>
    <div id="mobile-menu" class="mobile-menu absolute top-16 w-full sm:w-1/2 md:w-1/4">
        <ul class="bg-brand-primary shadow-lg text-white leading-9 font-bolder min-h-screen px-2 pt-10 tracking-wider flex flex-col divide-y divide-gray-600">
            <CategoryList :categories="categories"/>
        </ul>
    </div>
</template>
<script setup>
    import { inject } from 'vue';
    import CategoryList from '../Category/CategoryList.vue';
    const categories = inject("provideCategories",[]);

</script>
<style scoped>
    #mobile-menu{
        z-index: 200;
    }
    .mobile-menu {
        left: -100%;
        transition: 0.5s;
        transition:all 0.5s ease;
    }
    .mobile-menu.active {
       left: 0;
    }
</style>
