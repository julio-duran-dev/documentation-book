//id = 2
import id2img1 from "@/assets/img/imgDB/netsuite/id2Img1.png"
import id2img2 from "@/assets/img/imgDB/netsuite/id2Img2.png"
import id2img3 from "@/assets/img/imgDB/netsuite/id2Img3.png"
import id2img4 from "@/assets/img/imgDB/netsuite/id2Img4.png"
import { title } from "@primeuix/themes/aura/card"

export const PlataformInfo = [
  {
    id: 1,
    idPlataform: 9,
    title: 'Tabla de Locations en netsuit',
    img: [],
    description: ''

  },
  {
    id: 2,
    idPlataform: 9,
    title: 'Realizar una busqueda avanzada en alguna tabla y agregar filtros',
    img: [id2img1, id2img2, id2img3, id2img4],
    description: '1) Ir a: Reports > Saved Searches > All Saved Searches > New Save Search <br/><br/> 2) Haz clic en "New Saved Search" > elige "Item" como tipo de búsqueda (te llevará a la pantalla de configuración de búsqueda de ítems) <br/><br/> 3) Una vez allí, haz clic en la pestaña "Criteria" <br/><br/> 4) Dentro de los filtros, haz clic en "Add Filter" <br/><br/> 5) En la lista desplegable, busca y selecciona la opcion por la que quieres filtrar <br/><br/>6) Luego preciona el boton preview'

  },
  {
    id: 3,
    idPlataform: 10,
    title: 'Mostrar vistas de código con resaltado de sintaxis (code blocks) usando Prism.js',
    img: [],
    description: `
      1) Instala Prism.js: npm install prismjs <br/><br/>
      2) Importa los estilos en tu main: import 'prismjs/themes/prism.css' <br/><br/>
      3) Luego crea un componente Vue codeBlock.vue para que reciba el codigo que va mostrar por props 
    `,
    codeOne: `
      <template>
        <pre><code :class="\\\`language-\${language}\\\`" ref="codeRef">{{ code }}</code></pre>
      </template>

      <script setup>
      import { onMounted, ref, watch } from 'vue'
      import Prism from 'prismjs'

      import 'prismjs/components/prism-markup'
      import 'prismjs/components/prism-javascript'
      import 'prismjs/components/prism-css'

      const props = defineProps({
        code: {
          type: String,
          required: true,
        },
        language: {
          type: String,
          default: 'javascript'
        }
      })

      const codeRef = ref()

      onMounted(() => {
        if (codeRef.value) {
          Prism.highlightElement(codeRef.value)
        }
      })

      watch(() => props.code, () => {
        if (codeRef.value) {
          Prism.highlightElement(codeRef.value)
        }
      })
      </script>

      <style scoped>
      pre {
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 8px;
        overflow-x: auto;
        font-family: monospace;
      }
      </style>
      `,
    descriptionTwo: '4) Luego en tu componente padre llama al componente codeBlock.vue y pasale el codigo por props',
    codeTwo: `<CodeBlock :language="'html'" :code="infoPost?.codeOne" />`,
    descriptionThree: '5) Guarda el codigo en una variable o en una propiedad de un objeto a modo de template para pasarselo a el componente codeBlock.vue',
    codeThree: `codeOne:'<template>
        <pre><code :class...`

  },
  {
    id: 4,
    idPlataform: 1,
    title: 'Creacion de el componente layout Vue',
    img: [],
    description: `
    1) En este ejemplo creamos un componente DasboardLayout.vue Este componente actúa como un guardia de autenticación (auth guard). Solo permite acceder a la 
    aplicación si el usuario: <br/> <br/>
      a) Está autenticado en Supabase.<br/> <br/>
      b) Tiene un registro válido en la tabla users <br/><br/>
    Si no cumple estas condiciones, lo redirige a login. Mientras se hace esta validación, muestra una pantalla de carga.
    `,
    codeOne: `
      <template>
        <template v-if="!pending">
          <Layout />
        </template>
        <template v-if="pending">
          <ScreenLoading />
        </template>
      </template>

      <script setup lang="ts">
        import { useUserStore } from '@/composables/useUserStore'
        import ScreenLoading from '../../common/ScreenLoading.vue'
        import Layout from './Layout.vue'
        import { supabase } from '@/libs/supabaseClient'
        import { useRouter } from 'vue-router'

        const pending = ref(false)
        const router = useRouter()
        const userStore = useUserStore()

        onMounted(async () => {
          pending.value = true

          const { data: dataUser } = await supabase.auth.getUser()

          if (!dataUser?.user) {
            userStore.clearUser()
            return router.push({ name: 'login' })
          }
          const { data: user } = await supabase
            .from('users')
            .select('*')
            .eq('auth_id', dataUser.user?.id)
            .single()

          if (!user) {
            await supabase.auth.signOut()
            userStore.clearUser()
            return router.push({ name: 'login' })
          }
          userStore.setUser(user)

          pending.value = false
        })
      </script>
    `,
    descriptionTwo: `
    2) Logica del script, variable reactiva que indica si la app está esperando una respuesta del backend
    `,
    codeTwo: `const pending = ref(false)`,
    descriptionThree: `
    3) Cuando el componente se monta (onMounted), se activa el modo cargando (pending.value = true). <br/> <br/>
    4) Se obtiene el usuario autenticado desde Supabase ({ data: dataUser }).<br/> <br/>
    5) Si no hay usuario autenticado (if (!dataUser?.user)), se limpia el estado del usuario y se redirige a la página de login.<br/> <br/>
    6) Se consulta si existe el usuario en la tabla users de Supabase ({ data: user }), usando su auth_id.<br/> <br/>
    7) Si no se encuentra en la tabla ( if (!user)), se cierra sesión, se borra el estado y se redirige.<br/> <br/>
    8) Si todo está bien, se guarda el usuario en el store y se oculta el spinner (pending = false).<br/> <br/>
    9) Mientras pending sea true, muestra la pantalla de carga. <br/> <br/>
    10) Cuando pending cambia a false y el usuario está autenticado, muestra el Layout. <br/> <br/>
    11) El comoponente la Layout:
    `,
    codeThree: `
      <template>
        <div class="flex h-screen relative">
          <div style="width: 15%">
            <SidebarMenu />
          </div>

          <div
            style="
              width: 85%;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            "
          >
            <div style="flex-shrink: 0">
              <NavarComp />
            </div>
            <div
              style="flex-grow: 1; overflow-y: auto; position: relative"
              class="h-full"
            >
              <Alert>
                <router-view />
              </Alert>
            </div>
          </div>
          <ConfirmPopup />
        </div>
        <VueQueryDevtools />
      </template>

      <script setup lang="ts">
        import { ConfirmPopup } from 'primevue'
        import SidebarMenu from '../../sidebar/SidebarMenu.vue'
        import NavarComp from '@/components/navar/navar.vue'
        import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
        import Alert from '@/components/common/Alert/Alert.vue'
      </script>
    `,
    descriptionFour: `
      Este componente define la estructura base de la interfaz de tu aplicación, con: <br/><br/>
      a) Izquierda,	SidebarMenu	Menú de navegación lateral <br/><br/>
      b) Arriba, (dentro del contenido)	NavarComp	Barra superior (navbar) <br/><br/>
      c) Centro, dinámico	router-view	Renderiza la vista actual según la ruta <br/><br/>
      d) Alertas globales,	Alert	Muestra mensajes tipo modal <br/><br/>
    `
  },
  {
    id: 5,
    idPlataform: 1,
    title: 'Utilizacion de componente layout en las rutas en Vue Router',
    img: [],
    description: `
    Configuración de rutas <br/><br/>
    1) Redirige por defecto a /dashboard/ITEMS <br/><br/>
    2) Usa el componente DashboardLayout como layout para sus rutas hijas <br/><br/>
    3) Tiene rutas hijas como leads (y sus subrutas),  <br/><br/>
    4) Esta es la ruta base /dashboard. <br/><br/>
    5) Si alguien accede directamente a /dashboard, será redirigido a /dashboard/ITEMS automáticamente.  <br/><br/>
    6) Usa como componente base el DashboardLayout.vue, lo que significa que todas las rutas hijas se van 
    a renderizar dentro de ese layout usando (router-view />) 
    
    `,
    codeOne: `
    import { createRouter, createWebHistory } from 'vue-router'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
        path: '/dashboard',
        redirect: '/dashboard/ITEMS',
        component: () =>
          import('@/components/layout/DasboardLayout/DasboardLayout.vue'),
        children: [
          {
            path: 'leads',
            children: [
              {
                path: '',
                name: 'leads',
                component: () => import('@/views/CRM/LeadsView.vue')
              },
              {
                path: 'create',
                name: 'createLead',
                component: () => import('@/views/CRM/CreateLeadView.vue')
              },
          },
          {
            path: 'CRM/Opportunities',
            name: 'opportunities',
            component: () => import('../views/CRM/CrmView.vue')
          },
          {
            path: 'ITEMS',
            name: 'items',
            component: () => import('../views/ITEMS/ItemsView.vue')
          },
        ]
       ]
    })

    router.beforeEach((to, from, next) => {
      window.scroll(0, 0)
      next()
    })

    export default router

    `
  }
]