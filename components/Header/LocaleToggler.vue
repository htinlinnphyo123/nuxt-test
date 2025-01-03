<template>
  <div class="">
    <button v-if="locale == 'en'" @click="changeLocale('khr')">
      <img
        :src="khmerFlag"
        shape="circle"
        class="w-8 h-8 object-cover"
        alt="Khmer Flag Buddhish New"
      />
    </button>
    <button v-else @click="changeLocale('en')">
      <img
        :src="UsFlag"
        shape="circle"
        class="w-8 h-8 object-cover"
        alt="Us Flag Buddhish New"
      />
    </button>
  </div>
</template>
<script setup>
import localeManage from "@/composables/Locale/localeManage";
import UsFlag from "@/assets/logo/us_flag.svg";
import khmerFlag from "@/assets/logo/khmer_flag.webp";

const { locale, changeLocale } = localeManage();
</script>
<style scoped>
img {
  border-radius: 100%;
}
</style>
