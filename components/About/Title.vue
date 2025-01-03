<template>
    <h1 class="text-lg font-bold text-center mb-2 lg:mb-6" v-html="props.localizedTitle"></h1>
</template>
<script setup>
    const props = defineProps({
        localizedTitle : String
    })
</script>