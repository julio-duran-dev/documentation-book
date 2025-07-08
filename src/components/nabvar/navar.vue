<template>
  <div>
    <div class="flex align-items-center justify-content-between">
      <div class="roboto-bold text-xl text-base-color">
        {{ plataform?.name }}
      </div>
      <div class="">
        <img :src="plataform?.image" style="width: 150px;height: 100px;" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import { dataFrameworks } from "@/DB/frameWorkAndLeguages.ts"

const props = defineProps({
  idFramewrok: {
    type: Number
  }
})

const route = useRoute()
const id = parseInt(route.params.id as string)

const plataform = computed(() =>
  dataFrameworks.find((item) => item.id === props.idFramewrok)
)
</script>