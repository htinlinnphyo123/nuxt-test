<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Stay tuned for More Articles" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:image" :content="thumbnail" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" :content="title" />
      <Meta name="twitter:image" :content="thumbnail" />
      <Meta name="twitter:description" content="Stay tuned for More Articles" />
      <Link rel="icon" type="image/x-icon" :href="defaultThumbnail" />
    </Head>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    title: String,
    thumbnail: String,
  });
  const defaultThumbnail = "https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/Default/default_logo.jpg";
  const title = computed(() => props.title || 'Buddhist News');
  const thumbnail = computed(() => props.thumbnail || defaultThumbnail);
  </script>