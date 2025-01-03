<!-- <template>
  <div class="flex flex-wrap justify-center align-middle mb-5">
    <div class="border rounded-lg p-3">
      <div class="name" v-for="(datum, index) in data" :key="index">
        <Image
          :src="datum"
          alt="Buddhish News"
          class="w-auto h-[100px] sm:h-[200px] md:h-[320px] rounded-md mx-auto mb-3"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import Image from 'primevue/image';

const props = defineProps({
  data: Array,
});
</script> -->


<template>
  <div class="card flex justify-center image-detail">
      <Galleria :value="props.data" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
        :circular="true"
        :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
          <template #item="slotProps">
              <img :src="slotProps.item" alt="Buddhish News" style="width: 100%" />
          </template>
          <template #thumbnail="slotProps">
              <img :src="slotProps.item" alt="Buddhish News" class="aspect-video"/>
          </template>
      </Galleria>
  </div>
</template>
<style scoped>
.image-detail .p-image-toolbar{
  display:none;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';

const props = defineProps({
  data: Array,
});

const responsiveOptions = ref([
  {
      breakpoint: '1300px',
      numVisible: 4
  },
  {
      breakpoint: '575px',
      numVisible: 1
  }
]);
</script>
