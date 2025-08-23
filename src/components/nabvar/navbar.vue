<template>
  <div class="">
    <div class="flex p-4">
      <div>
        <img :src="iconoCodigo" class="mr-3 cursor-pointer" width="45px" alt="" @click="redirectHome">
      </div>
      <div>
        <img :src="iconoBiblia" class="cursor-pointer" width="45px" alt="" @click="redirectBiblia">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import iconoCodigo from '@/assets/img/iconoCodigo.png'
import iconoBiblia from '@/assets/img/biblia.png'

const router = useRouter()

const redirectBiblia = () => {
  router.push({ name: 'homeBiblie' })
}

const redirectHome = () => {
  router.push({ name: 'home' })
}
</script>