<template>
  <div class="card overflow-hidden">
    <DataView :value="temas_biblicos" :layout="layout">
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
              <div class=" border-1 p-1 border-round border-base-color flex" style="width: 100px;height: 100px;">
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
              <Button @click="viewPage(item.id)" class="mr-3 px-5 roboto-regular botonBase">View</Button>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-2 flex grid gap-3 justify-content-center">
          <div v-for="(item, index) in slotProps.items" :key="index" class=" col-12 sm:col-6 md:col-2">
            <div class="border-1 border-round border-base-color p-2">
              <div class="flex flex-column align-items-center justify-content-center">
                <div class=" border-1 p-1 border-round border-base-color flex" style="width: 150px;height: 150px;">
                  <img class="w-full" :src="item.image" alt="">
                </div>
                <div class="ml-2 py-2 flex flex-column justify-content-between">
                  <div class="text-center roboto-regular text-sm">
                    <div class="roboto-bold mb-1">
                      {{ item.category }}
                    </div>
                    <div>
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="flex justify-content-center my-2">
                    <Rating v-model="item.rating" disabled />
                  </div>
                </div>
                <div class=" w-full">
                  <Button @click="viewPage(item.id)" class="w-full roboto-regular botonBase" style="">View</Button>

                </div>
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
import { useRouter } from 'vue-router';
import { temas_biblicos } from '@/DB/temasBiblicos';
import { TEMAS_BIBLICOS_ID } from '@/DB/idTemasBiblicos';
import { ref } from "vue";

const layout = ref('grid');
const options = ref(['list', 'grid']);
const router = useRouter()

const viewPage = (id: number) => {

  if (id === TEMAS_BIBLICOS_ID.VIDA_ENTER) {
    router.push({ name: 'vidaEterna' })
  }


}

</script>
