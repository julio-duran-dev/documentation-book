<template>
  <div class="p-4">
    <Navar :id-framewrok="id" class="mb-3" />
    <div v-for="info in filteredInfo" :key="info.id" class="border-1 border-base-color p-4 border-round mb-2 ">
      <div class="roboto-regular text-base-color text-2xl" v-html="info?.textOne"></div>
      <div class="mt-4">
        <button class="cursor-pointer" @click="viewRespOne = !viewRespOne">Ver respuestas</button>
        <div v-if="viewRespOne" class="roboto-regular text-base-color text-2xl mt-2" v-html="info?.respOne"></div>
      </div>
      <div class="roboto-regular text-base-color text-2xl mt-7" v-html="info?.textTwo"></div>
      <div class="mt-4">
        <button class="cursor-pointer" @click="viewRespTwo = !viewRespTwo">Ver respuestas</button>
        <div v-if="viewRespTwo" class="roboto-regular text-base-color mt-7 text-2xl" v-html="info?.respTwo"></div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Navar from '@/components/nabvar/navar.vue';
import { computed, ref } from "vue";
import { TechnicalAreaData } from "@/DB/TechnicalArea";

const route = useRoute()

const id = parseInt(route.params.id as string)

const filteredInfo = computed(() =>
  TechnicalAreaData.filter((item) => item.idPlataform === id)
)

const viewRespOne = ref(false)
const viewRespTwo = ref(false)
</script>