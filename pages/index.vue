<template>
  <div>
    <div v-if="loading === true">
      <Loader />
    </div>
    <div v-else>
      <FlashNew :data="localizedFlashNews" />
      <br />
      <SponsorAds :data="topSponsorAds" />
      <BannerSection
        :data="localizedBannerNews"
        :dataTwo="localizedTopLatestArticles"
      />
      <br />
      <SponsorAds :data="sponsorAds" />
      <br />
      <div
        v-for="(localizedHomeArticle, index) of localizedHomeArticles"
        :key="index"
      >
        <Highlight
          :categoryData="localizedHomeArticle.category_info"
          :data="localizedHomeArticle.articles"
          :videoData="localizedHomeArticle.videos"
          :audioData="localizedHomeArticle.audios"
        />
        <br />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import useHomeData from "@/composables/Home";
import FlashNew from "@/components/Home/FlashNew.vue";
import BannerSection from "@/components/Home/BannerSection.vue";
import SponsorAds from "@/components/Home/SponsorAds.vue";
import Highlight from "@/components/Home/Highlight.vue";
import Loader from "@/components/Home/Loader.vue";

const {
  localizedFlashNews,
  topSponsorAds,
  localizedBannerNews,
  localizedTopLatestArticles,
  sponsorAds,
  localizedHomeArticles,

  error,
  loading,
  fetchHomeData,
} = useHomeData();

onMounted(async () => {
  await fetchHomeData();
});
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
