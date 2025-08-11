<template>
  <div class="p-4">
    <Navar :id-framewrok="infoPost?.idPlataform" />
    <div>
      <div class="roboto-bold text-base-color text-center">
        {{ infoPost?.title }}
      </div>

      <div class="text-center my-3 roboto-medium text-base-color" v-html="infoPost?.description">
      </div>
      <GaleriaImagenes v-if="infoPost?.img?.length > 0" :img="infoPost?.img" />
    </div>
    <div>
      {{ }}
    </div>
    <div v-if="infoPost?.codeOne" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeOne" />
      </div>
    </div>
    <div v-if="infoPost?.descriptionTwo" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionTwo"></div>

    <div v-if="infoPost?.codeTwo" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeTwo" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionThree" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionThree"></div>

    <div v-if="infoPost?.codeThree" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeThree" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionFour" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionFour"></div>

    <div v-if="infoPost?.codeFour" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeFour" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionFive" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionFive"></div>

    <div v-if="infoPost?.codeFive" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeFive" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionSix" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionSix"></div>

    <div v-if="infoPost?.codeSix" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeSix" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionSeven" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionSeven"></div>

    <div v-if="infoPost?.codeSeven" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeSeven" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionEight" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionEight"></div>

    <div v-if="infoPost?.codeEight" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeEight" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionNine" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionNine"></div>

    <div v-if="infoPost?.codeNine" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeNine" />
      </div>
    </div>

    <div v-if="infoPost?.descriptionTen" class="text-center mt-3 roboto-medium text-base-color"
      v-html="infoPost?.descriptionTen"></div>

    <div v-if="infoPost?.codeTen" class="flex justify-content-center mt-4">
      <div class="w-7">
        <CodeBlock :language="'javascript'" :code="infoPost?.codeTen" />
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
