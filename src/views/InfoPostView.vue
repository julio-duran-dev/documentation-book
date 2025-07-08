<template>
  <div class="p-4">
    <Navar :id-framewrok="infoPost?.idPlataform" />
    <div>
      s
    </div>
  </div>
</template>

<script setup lang="ts">
import Navar from '@/components/nabvar/navar.vue';
import { useRoute } from 'vue-router';
import { PlataformInfo } from '@/DB/platformInfo';
import { computed } from 'vue';

const route = useRoute()
const id = parseInt(route.params.id as string)

const infoPost = computed(() =>
  PlataformInfo.find((post) => post.id === id)
)
</script>