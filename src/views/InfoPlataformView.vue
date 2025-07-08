<template>
  <div class="p-4">
    <Navar :id-framewrok="id" />
    <div v-for="info in filteredInfo" :key="info.id"
      class="border-1 border-base-color p-2 border-round flex align-items-center justify-content-between mb-2">
      <div class="roboto-regular text-base-color">
        {{ info.title }}
      </div>
      <div>
        <Button class="botonBase" @click="viewPost(info.id)">View</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlataformInfo } from "@/DB/platformInfo.ts"
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navar from '@/components/nabvar/navar.vue';

const route = useRoute()
const router = useRouter()
const id = parseInt(route.params.id as string)

const filteredInfo = computed(() =>
  PlataformInfo.filter((item) => item.idPlataform === id)
)

const viewPost = (id: number) => {
  router.push({ name: 'infoPost', params: { id } })
}

</script>