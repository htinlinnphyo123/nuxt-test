<template>
    <div class="lg:mx-auto">
        <h1 class="md:text-lg mb-4 select-none text-start">{{ downloadTitle }}</h1>
        <!-- <p>{{ downloadText }}</p> -->
        <a :href="playStoreLink" class="block my-2" target="_blank">
            <img :src="googlePhoto" class="max-w-28"/>
        </a>
        <a :href="appStoreLink" target="_blank">
            <img :src="applePhoto" class="max-w-28"/>
        </a>
    </div>
</template>
<script setup>
    const playStoreLink = "https://app.buddhist.news/";
    const appStoreLink = "https://app.buddhist.news/";
    import googlePhoto from "@/assets/logo/androidicon.png";
    import applePhoto from "@/assets/logo/iosicon.png";
    import localeManage from "@/composables/Locale/localeManage";

    const {locale} = localeManage();
    import { computed } from "vue";
    const downloadTitle = computed(() => {
        return locale.value=='en' ? 'Download' : 'ទាញយកកម្មវិធីទូរស័ព្ទ';
    });
    // const downloadText = computed(()=>{
    //     return locale.value=='en' ? 'Avallable to download from Playstore and Appstore' : 'សូមទាញយកកម្មវិធីទូរស័ព្ទដៃពី Google Play និង App Store';
    // })
</script>