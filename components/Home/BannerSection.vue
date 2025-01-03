<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 me-3 gap-6" id="banner-section">
    <div class="col-span-2">
      <Carousel
        id="carousel"
        class="mx-0.5 lg:mx-4"
        :value="data"
        circular
        style="position: relative"
      >
        <template #item="slotProps">
          <router-link
            :to="{
              name: 'articleDetail',
              params: { id: slotProps.data.id },
            }"
          >
            <div class="font-serif w-full rounded-md relative">
              <div class="relative mx-auto">
                <img
                  v-on:load="imgLoaded(slotProps.data.id)"
                  :src="
                    getImageSource(slotProps.data.id, slotProps.data.thumbnail)
                  "
                  :alt="slotProps.data.localizedTitle"
                  class="w-full h-[250px] sm:h-[400px] md:h-[520px] xl:h-[600px] rounded-md mx-auto object-cover"
                />
              </div>
              <div
                class="absolute bottom-0 w-full px-4 md:px-6 xl:px-10 text-white py-2 md:py-4 lg:py-6 font-extrabold"
                style="background-color: rgba(60, 60, 60, 0.5)"
              >
                <h3 class="mb-3 font-medium text-md md:text-lg lg:text-xl xl:text-4xl line-clamp-2 xl:leading-[55px]">
                  {{ slotProps.data.localizedTitle }}
                </h3>
                <p class="text-sm md:text-md lg:text-xl">
                  {{ slotProps.data.date }}
                </p>
              </div>
            </div>
          </router-link>
        </template>
      </Carousel>
    </div>

    <div class="mt-10 md:mt-0">
      <ul
        class="list-none border border-gray-300 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
      >
        <div class="absolute px-2 bg-gray-100" style="top: -1rem">
          <h1 class="text-2xl">{{ latestNewsText }}</h1>
        </div>
        <HorizontalArticleCard
          :articleArray="dataTwo"
          :photoFilterPercent="100"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import Carousel from "primevue/carousel";
import { Tag } from "primevue";
import placeHolder from "@/assets/logo/place_holder.webp";
import HorizontalArticleCard from "../Article/HorizontalArticleCard.vue";
import localeManage from "@/composables/Locale/localeManage";

const imgLoading = ref({});

const imgLoaded = (id) => {
  imgLoading.value[id] = false;
};

const getImageSource = (id, thumbnail) => {
  return imgLoading.value[id] === false ? thumbnail : placeHolder;
};

const props = defineProps({
  data: Array,
  dataTwo: Array,
});
const {locale} = localeManage();
props.data.forEach((datum) => {
  imgLoading.value[datum.id] = true;
});
const latestNewsText = computed(()=>{
  return locale.value === "en" ? "Latest News" : "ព័ត៌មានថ្មីចុងក្រោយ";
})
</script>
<style>
.p-carousel-prev-button {
  position: absolute !important;
  background-color: #878894 !important;
  left: 0 !important;
  font-size: 3rem !important;
  z-index: 90;
  border-radius: 20px !important;
  /* padding: 0 0.5rem !important; */
}

#banner-section .p-icon {
  padding: 0 !important;
  color: rgb(253, 250, 250) !important;
}

.p-carousel-next-button {
  position: absolute !important;
  background-color: #878894 !important;
  font-size: 3rem !important;
  right: 0 !important;
  border-radius: 20px !important;
}
</style>
