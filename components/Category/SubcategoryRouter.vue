<template>

</template>

<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  categoryId: String,
  subcategories: Array,
});

const route = useRoute();

const isActiveSub = (subId) => {
  return route.params.sub === subId;
};
</script>
