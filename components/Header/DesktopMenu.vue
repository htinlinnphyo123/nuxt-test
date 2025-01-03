<template>
    <ul id="menu-bar" class="hidden xl:flex space-x-2">
        <CategoryList :categories="categories" />      
    </ul>
</template>
<script setup>
    import { inject } from 'vue';
    import CategoryList from "@/components/Category/CategoryList.vue"

    const categories = inject("provideCategories",[]);
    
</script>
<style scoped>
    .category-item::after{
        content: ' ';
        width:0%;
        height:200%;
        position: absolute;
        top:-50%;
        left:0;
        border-bottom-width: 2px;
        border-bottom-color: #dd0000;
        border-top-width:2px;
        border-top-color:#dd0000;
        transition:all 0.5s ease;
        z-index: -1;
    }
    .category-item:hover::after{
        width:100%;
    }

</style>