<template>
  
</template>

<script setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';

const props = defineProps({
  title: String,
  thumbnail: String,
});

const defaultThumbnail = "https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/default_logo.jpg";
const title = computed(() => props.title || 'Buddhist News');
const thumbnail = computed(() => props.thumbnail || defaultThumbnail);

useHead({
  title: title.value,
  meta: [
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: 'Stay tuned for More Articles' },
    { property: 'og:title', content: title.value },
    { property: 'og:image', content: thumbnail.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title.value },
    { name: 'twitter:image', content: thumbnail.value },
    { name: 'twitter:description', content: 'Stay tuned for More Articles' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: defaultThumbnail },
  ],
});
</script>