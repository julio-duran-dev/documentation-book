import './assets/main.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import DataView from 'primevue/dataview';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Rating from 'primevue/rating';
import Galleria from 'primevue/galleria';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false
    }
  }
})

app.component('DataView', DataView)
app.component('Button', Button)
app.component('SelectButton', SelectButton)
app.component('Rating', Rating)
app.component('Galleria', Galleria)

app.mount('#app')
