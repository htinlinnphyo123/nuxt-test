<template>
    <div id="mobile-menu" class="mobile-menu absolute top-16 w-full sm:w-1/2 md:w-1/4">
        <MobileCategoryList :categories="categories"/>
    </div>
</template>
<script setup>
    import { inject } from 'vue';
    import MobileCategoryList from './MobileCategoryList.vue';
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
