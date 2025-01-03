<template>
    <iframe
        :src="link"
        width="100%"
        height="500"
        frameborder="0"
        class="mx-auto"
        allowfullscreen
    />
</template>
<script setup>
const props = defineProps({
    link: String,
});
</script>