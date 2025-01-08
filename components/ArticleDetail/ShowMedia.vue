<template>
  <div>
    <div class="mx-2 md:mx-6 lg:mx-10">
      <div class="">
        <p
          v-text="data.localizedTitle"
          class="font-bold text-xl mb-2 lg:mb-4 lg:text-2xl"
        ></p>
        <SubTitle :date="data.date" :written_by="data.written_by" />
        <div class="grid grid-cols-6 gap-10">
          <div class="col-span-6 lg:col-span-4">
            <Thumbnail
              :thumbnail="data.thumbnail"
              :name="data.localizedTitle"
              v-if="data.type == 'audio' || data.type === 'default'"
            />
            <div v-if="data.type == 'audio' || data.type === 'default'">
              <br />
            </div>
            <div v-if="data.type == 'photo'">
              <Image :data="data.link" />
            </div>
            <div v-else-if="data.type == 'video'">
              <Video :data="data.link" />
            </div>
            <div v-else-if="data.type == 'audio'">
              <Audio :data="data.link" />
            </div>
            <div v-else-if="data.type == 'pdf'">
              <Pdf :link="data.link" />
            </div>
            <Description :data="data.localizedDescription" />
            <br />
            <ArticleSocialSharing :data="data" />
          </div>
          <div
            class="col-span-6 lg:col-span-2 flex flex-wrap gap-2 lg:flex-col justify-start items-center mt-5 lg:mt-0"
          >
            <a
              v-for="(sponsor, index) in sponsorData"
              :key="index"
              :href="sponsor.link"
              target="_blank"
              class="w-2/4 lg:w-full lg:mb-2 mx-auto"
            >
              <img
                :src="sponsor.thumbnail_image"
                class="w-full lg:mb-2 mx-auto"
                alt="sponsor"
              />
            </a>

            <div class="mt-1">
              <ul
                class="list-none border border-gray-300 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
              >
                <div class="absolute px-2 bg-gray-100" style="top: -1rem">
                  <h1 class="text-2xl">{{ relatedArticle }}</h1>
                </div>
                <HorizontalArticleCard
                  :articleArray="relatedData"
                  :photoFilterPercent="100"
                />
              </ul>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
    <br />
    <!-- <div>
      <RelatedArticle :data="relatedData" />
    </div> -->
    <br />
  </div>
</template>

<script setup>
import Audio from "./Audio.vue";
import Description from "./Description.vue";
import HorizontalArticleCard from "../Article/HorizontalArticleCard.vue";
import Video from "./Video.vue";
import Image from "./Image.vue";
import Thumbnail from "./Thumbnail.vue";
import SubTitle from "./SubTitle.vue";
import Pdf from "./Pdf.vue";
import ArticleSocialSharing from "./ArticleSocialSharing.vue";

const relatedArticle = "Related Articles";
const props = defineProps({
  data: Object,
  relatedData: Array,
  sponsorData: Array,
});
</script>
