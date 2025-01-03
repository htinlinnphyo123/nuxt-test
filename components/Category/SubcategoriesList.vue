<template>
    <TransitionGroup name="subcategory" tag="ul" class="flex flex-wrap justify-center mx-1 gap-2 lg:gap-4 mt-4">
        <li
            @click="subcategoryChanger('')"
            key="all"
            :class="subcategoryID=='' ? 'bg-brand-primary text-white' : ''"
            class="font-bold text-sm md:text-md lg:tracking-widest border border-brand-primary px-1 py-0.5 md:px-2 md:py-1 lg:px-3 rounded-md lg:rounded-lg cursor-pointer hover:bg-brand-primary hover:text-white transition-all delay-50 shadow-lg">
            All
        </li>
        <li v-for="subcategory in subcategories" :key="subcategory.id"
            @click="subcategoryChanger(subcategory.id)"
            :class="subcategoryID==subcategory.id ? 'bg-brand-primary text-white' : ''"
            class="font-bold text-sm md:text-md lg:tracking-widest border border-brand-primary px-1 py-0.5 md:px-2 md:py-1 lg:px-3 rounded-md lg:rounded-lg cursor-pointer hover:bg-brand-primary hover:text-white transition-all delay-50 shadow-lg">
            {{ subcategory.localizedName }}
        </li>
    </TransitionGroup>
</template>
<script setup>
    import { inject, computed,ref } from 'vue';
    const categories = inject('provideCategories',[]);
    const props = defineProps({
        categoryId:String
    })
    const subcategoryID = ref('')
    const emit = defineEmits(['subcategoryChange'])
    const subcategories = computed(()=>{
        return categories.value.find((category) => category.id == props.categoryId) ? categories.value.find((category) => category.id == props.categoryId).subcategories : [];
    })
    function subcategoryChanger(value){
        emit('subcategoryChange',value);
        subcategoryID.value = value;
    }

</script>
<style scoped>
.subcategory-enter-active{
  transition: all 0.4s ease-in-out;
}
.subcategory-leave-active{
    transition: all 0.1s ease-in-out;
}
.subcategory-enter-from,
.subcategory-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>