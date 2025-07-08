<template>
  <div class="p-4">
    <Navar :id-framewrok="infoPost?.idPlataform" />
    <div>
      <div class="roboto-bold text-base-color text-center">
        {{ infoPost?.title }}
      </div>

      <div class="text-center my-3 roboto-medium text-base-color" v-html="infoPost?.description"></div>
      <GaleriaImagenes :img="infoPost?.img" />
    </div>
    <div>
      {{ }}
    </div>
    <div v-if="infoPost?.codeOne" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'html'" :code="infoPost?.codeOne" />
      </div>
    </div>
    <div v-if="infoPost?.descriptionTwo" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionTwo"></div>

    <div v-if="infoPost?.codeTwo" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'html'" :code="infoPost?.codeTwo" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionThree" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionThree"></div>

    <div v-if="infoPost?.codeThree" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'html'" :code="infoPost?.codeThree" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navar from '@/components/nabvar/navar.vue';
import { useRoute } from 'vue-router';
import { PlataformInfo } from '@/DB/platformInfo';
import { computed } from 'vue';
import GaleriaImagenes from '@/components/galeriaDeImagenes/galeriaImagenes.vue';
import CodeBlock from '@/components/codeBlock/codeBlock.vue';

const route = useRoute()
const id = parseInt(route.params.id as string)

const infoPost = computed(() =>
  PlataformInfo.find((post) => post.id === id)
)

</script>
