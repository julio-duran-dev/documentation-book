<template>
  <div class="card">
    <DataView :value="products" :layout="layout">
      <template #header>
        <div class="flex justify-content-end">
          <SelectButton v-model="layout" :options="options" :allowEmpty="false">
            <template #option="{ option }">
              <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
            </template>
          </SelectButton>
        </div>
      </template>

      <template #list="slotProps">
        <div class="p-2">
          <div v-for="(item, index) in slotProps.items" :key="index"
            class="mt-2 border-1 flex align-items-center justify-content-between p-1 border-round border-base-color">
            <div class="flex">
              <div class=" border-1 p-1 border-round border-base-color" style="width: 100px;">
                <img class="w-full" :src="item.image" alt="">
              </div>
              <div class="ml-2 py-2 flex flex-column justify-content-between roboto">
                <div>
                  {{ item.category }}<br>
                  {{ item.name }}
                </div>
                <Rating v-model="item.rating" disabled />
              </div>
            </div>
            <div>
              <Button class="mr-3 px-5 roboto-regular">View</Button>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-2 flex grid gap-3 justify-content-center">
          <div v-for="(item, index) in slotProps.items" :key="index"
            class=" border-1 border-round border-base-color col-12 sm:col-6 md:col-2">
            <div class="flex flex-column align-items-center justify-content-center">
              <div class=" border-1 p-1 border-round border-base-color " style="width: 150px;">
                <img class="w-full" :src="item.image" alt="">
              </div>
              <div class="ml-2 py-2 flex flex-column justify-content-between">
                <div class="text-center roboto-regular text-sm">
                  {{ item.category }}<br>
                  {{ item.name }}
                </div>
                <div class="flex justify-content-center">
                  <Rating v-model="item.rating" disabled />
                </div>
              </div>
              <div class="flex justify-content-center w-full">
                <Button class="w-full roboto-regular">View</Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview';
import logoVue from '@/assets/logo.svg'
import { ref, onMounted } from "vue";

const products = ref([
  { name: 'vue', price: '2500', rating: 5, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 3, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 5, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 3, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 5, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 3, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 5, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 3, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 5, category: 'Frame work', image: logoVue },
  { name: 'vue', price: '2500', rating: 3, category: 'Frame work', image: logoVue },
]);
const layout = ref('grid');
const options = ref(['list', 'grid']);


</script>
