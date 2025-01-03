<template>
  <div class="flex flex-wrap justify-start align-middle mb-5">
    <div class="rounded-lg">
      <div class="w-full" v-for="(datum, index) in data" :key="index">
        <video
          id="player"
          controls
          class="aspect-video border w-full"
          muted
          autoplay
        >
          <source :src="datum" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Array,
});
</script>
