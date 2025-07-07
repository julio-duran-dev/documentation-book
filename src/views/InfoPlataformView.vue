<template>
  <div class="p-4">
    <div class="flex align-items-center justify-content-between">
      <div class="roboto-bold text-xl text-base-color">
        {{ plataform?.name }}
      </div>
      <div class="">
        <img :src="plataform?.image" style="width: 150px;height: 100px;" alt="">
      </div>
    </div>
    <div v-for="info in filteredInfo" :key="info.id"
      class="border-1 border-base-color p-2 border-round flex align-items-center justify-content-between">
      <div class="roboto-regular text-base-color">
        {{ info.title }}
      </div>
      <div>
        <Button>View</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlataformInfo } from "@/DB/platformInfo.ts"
import { dataFrameworks } from "@/DB/frameWorkAndLeguages.ts"
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const id = route.params.id
const idNumber = parseInt(id as string)

const filteredInfo = computed(() =>
  PlataformInfo.filter((item) => item.idPlataform === idNumber)
)


const plataform = computed(() =>
  dataFrameworks.find((item) => item.id === idNumber)
)

</script>