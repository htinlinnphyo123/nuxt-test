<template>
  <div>
    <!-- <p class="text-lg font-semibold mb-2 lg:mb-4" v-show="data">Description</p> -->
    <p
      v-html="data"
      class="text-md root-div lg:tracking-wide lg:text-lg break-all"
    ></p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: String,
});
</script>
<style scoped>
.root-div * {
  background-color: #f3f4f6 !important;
}
</style>
