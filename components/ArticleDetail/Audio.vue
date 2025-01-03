<template>
  <div class="border rounded-lg p-3 md:w-1/2 mx-auto shadow-inner">
    <div class="px-5 py-3">
      <VueAudioPlayer
        ref="audioPlayer"
        :audio-list="data"
        :show-play-loading="false"
        theme-color="#141b4d"
      >
      </VueAudioPlayer>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Array,
});
</script>
