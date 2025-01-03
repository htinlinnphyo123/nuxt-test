<template>
    <div class="flex items-center">
      <ShareNetwork
        network="facebook"
        :url="'https://frontend.buddhish.news/articles/' + data.id"
        :title="data.localizedTitle"
        :description="data.localizedDescription"
        :media="data.thumbnail"
        v-slot="{ share }"
      >
        <div @click="share" class="social-button cursor-pointer">
          <i class="pi pi-facebook"></i> <span class="hidden lg:inline text-sm">Share on Facebook</span>
        </div>
    </ShareNetwork>
      <a
        :href="telegramShareUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="social-button"
      >
        <i class="pi pi-telegram"></i>  <span class="hidden lg:inline text-sm">Share on Telegram</span>
      </a>
      <a
        :href="pinterestShareUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="social-button"
      >
        <i class="pi pi-pinterest"></i>  <span class="hidden lg:inline text-sm">Share on Pinterest</span>
      </a>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { ShareNetwork } from 'vue3-social-sharing';
  
  const props = defineProps({
    data: Object
  });
  
  const baseUrl = 'https://frontend.buddhish.news/articles/';
  
  const telegramShareUrl = computed(() => {
    const url = encodeURIComponent(baseUrl + props.data.id);
    const text = encodeURIComponent(props.data.localizedTitle);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  });
  
  const pinterestShareUrl = computed(() => {
    const url = encodeURIComponent(baseUrl + props.data.id);
    const media = encodeURIComponent(props.data.thumbnail);
    const description = encodeURIComponent(props.data.localizedTitle);
    return `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`;
  });
  </script>
  
  <style scoped>
  .social-button {
    display: inline text-sm-block;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    vertical-align: center;

    display:flex;
    justify-content: center;
    align-content: center;
    gap:10px; 
  }
  
  .pi-facebook {
    color: #3b5998; /* Customize the Facebook icon color */
  }
  .pi-facebook-messenger {
    color: #0084ff; /* Customize the Messenger icon color */
  }
  .pi-telegram {
    color: #0088cc; /* Customize the Telegram icon color */
  }
  .pi-pinterest {
    color: #bd081c; /* Customize the Pinterest icon color */
  }
  </style>