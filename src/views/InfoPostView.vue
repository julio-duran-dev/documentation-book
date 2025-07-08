<template>
  <div class="p-4">
    <Navar :id-framewrok="infoPost?.idPlataform" />
    <div>
      <div class="roboto-bold text-base-color text-center">
        {{ infoPost?.title }}
      </div>
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
      <div class="text-center mt-3 roboto-medium text-base-color" v-html="infoPost?.description"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navar from '@/components/nabvar/navar.vue';
import { useRoute } from 'vue-router';
import { PlataformInfo } from '@/DB/platformInfo';
import { computed, ref } from 'vue';

const route = useRoute()
const id = parseInt(route.params.id as string)

const infoPost = computed(() =>
  PlataformInfo.find((post) => post.id === id)
)

const images = computed(() => {
  if (!infoPost.value?.img) return [];

  return infoPost.value.img.map((src, index) => ({
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