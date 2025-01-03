<template>
  <div>
    <i v-if="type === 'video'" class="pi pi-video"></i>
    <i v-else-if="type === 'photo'" class="pi pi-images"></i>
    <i v-else-if="type === 'audio'" class="pi pi-headphones"></i>
    <i v-else class="pi pi-book"></i>
  </div>
</template>
<script setup>
    const props = defineProps({
        type:String
    })
</script>