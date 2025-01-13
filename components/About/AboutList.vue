<template>
  <div class="">
    <div
      v-for="page in props.localizedPage"
      :key="page.localizedTitle"
      :id="page.slug"
      class="w-full break-all"
    >
      <div class="py-2 lg:py-6">
        <Title :localizedTitle="page.localizedTitle" />
        <p class="text-md" v-html="page.localizedDescription"></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Title from "./Title.vue";
const props = defineProps({
  localizedPage: Array,
});
</script>