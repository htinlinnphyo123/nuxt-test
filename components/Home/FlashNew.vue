<template>
  <div class="shadow-inner shadow-gray-900/50">
    <Splitter>
      <SplitterPanel class="flex items-center justify-center" :size="90">
        <MarqueeComponent
          :pause-on-hover="true"
          @on-pause="playState = 'paused'"
          @on-resume="playState = 'playing'"
        >
          <span
            v-for="(datum, index) in data"
            :key="index"
            class="me-32 cursor-pointer hover:shadow-lg p-1 transition-all transition-duration-300"
          >
            <router-link
              :to="{ name: 'articleDetail', params: { id: datum.id } }"
            >
              <div class="flex justify-center align-middle">
                <div class="me-1">
                  <Image
                    :src="
                      'https://prod-bcnews.sgp1.cdn.digitaloceanspaces.com/' +
                      datum.thumbnail
                    "
                    alt="Image"
                    width="40"
                  />
                </div>
                <div>
                  {{ datum.localizedTitle }}
                </div>
              </div>
            </router-link>
          </span>
        </MarqueeComponent>
      </SplitterPanel>
    </Splitter>
  </div>
</template>
<script setup>
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import { defineProps, watch } from "vue";
import Image from "primevue/image";

const label = "Flash News";
const props = defineProps({
  data: Array,
});
// watch(
//   () => props.data,
//   () => {
//     console.log(props.data);
//   }
// );
</script>

<style scoped></style>
