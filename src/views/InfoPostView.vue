<template>
  <div class="p-4">
    <Navar :id-framewrok="infoPost?.idPlataform" />
    <div>
      <div class="roboto-bold text-base-color text-center">
        {{ infoPost?.title }}
      </div>
      <GaleriaImagenes :img="infoPost?.img" />
      <div class="text-center mt-3 roboto-medium text-base-color" v-html="infoPost?.description"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navar from '@/components/nabvar/navar.vue';
import { useRoute } from 'vue-router';
import { PlataformInfo } from '@/DB/platformInfo';
import { computed } from 'vue';
import GaleriaImagenes from '@/components/galeriaDeImagenes/galeriaImagenes.vue';

const route = useRoute()
const id = parseInt(route.params.id as string)

const infoPost = computed(() =>
  PlataformInfo.find((post) => post.id === id)
)

</script>
