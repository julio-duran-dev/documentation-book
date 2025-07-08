<template>
  <div>
    <div class="flex justify-content-center">
      <div class="mt-4 w-7">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="">
          <template #item="slotProps">
            <div class="w-full" style="height: 500px;">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
              style="width: 100px;height: 100px;" />
          </template>
        </Galleria>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
const props = defineProps({
  img: {
    type: Array
  }
})

const images = computed(() => {
  if (!props?.img) return [];

  return props?.img.map((src, index) => ({
    itemImageSrc: src,
    thumbnailImageSrc: src,
    alt: `Imagen ${index + 1}`,
  }));
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


<style>
* {
  --p-galleria-border-color: rgb(164, 164, 164);
}
</style>