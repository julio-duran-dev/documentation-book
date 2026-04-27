//id = 2
import id2img1 from "@/assets/img/imgDB/netsuite/id2Img1.png"
import id2img2 from "@/assets/img/imgDB/netsuite/id2Img2.png"
import id2img3 from "@/assets/img/imgDB/netsuite/id2Img3.png"
import id2img4 from "@/assets/img/imgDB/netsuite/id2Img4.png"
import id7img1 from "@/assets/img/imgDB/node/lineasTiempo.png"
import id13img1 from "@/assets/img/imgDB/supabase/apiDocsSupabase.png"
import id13img2 from "@/assets/img/imgDB/supabase/apiDocsSupabase_2.png"
import id13img3 from "@/assets/img/imgDB/supabase/apiDocsSupabase_3.png"
import id13img4 from "@/assets/img/imgDB/supabase/apiDocsSupabase_4.png"
import id13img5 from "@/assets/img/imgDB/supabase/apiDocsSupabase_5.png"
import id13img6 from "@/assets/img/imgDB/supabase/apiDocsSupabase_6.png"
import id13img7 from "@/assets/img/imgDB/supabase/apiDocsSupabase_7.png"
import id13img8 from "@/assets/img/imgDB/supabase/apiDocsSupabase_8.png"
import id13img9 from "@/assets/img/imgDB/supabase/apiDocsSupabase_9.png"
import id13img10 from "@/assets/img/imgDB/supabase/apiDocsSupabase_10.png"
import id13img11 from "@/assets/img/imgDB/supabase/apiDocsSupabase_11.png"
import id24img1 from "@/assets/img/imgDB/redis/docker-up.png"
import id25img1 from "@/assets/img/imgDB/cloudways/img1.png"
import { FrameWorkAndLeguages } from "./categoris"

export const PlataformInfo = [
  {
    id: 1,
    idPlataform: FrameWorkAndLeguages.Netsuite,
    title: 'Tabla de Locations en netsuit',
    img: [],
    description: ''

  },
  {
    id: 2,
    idPlataform: FrameWorkAndLeguages.Netsuite,
    title: 'Realizar una busqueda avanzada en alguna tabla y agregar filtros',
    img: [id2img1, id2img2, id2img3, id2img4],
    description: '1) Ir a: Reports > Saved Searches > All Saved Searches > New Save Search <br/><br/> 2) Haz clic en "New Saved Search" > elige "Item" como tipo de búsqueda (te llevará a la pantalla de configuración de búsqueda de ítems) <br/><br/> 3) Una vez allí, haz clic en la pestaña "Criteria" <br/><br/> 4) Dentro de los filtros, haz clic en "Add Filter" <br/><br/> 5) En la lista desplegable, busca y selecciona la opcion por la que quieres filtrar <br/><br/>6) Luego preciona el boton preview'

  },
  {
    id: 3,
    idPlataform: FrameWorkAndLeguages.Libraries,
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
    idPlataform: FrameWorkAndLeguages.VueJs,
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
    idPlataform: FrameWorkAndLeguages.VueJs,
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
  },
  {
    id: 6,
    idPlataform: FrameWorkAndLeguages.Libraries,
    title: 'Libreria Lodash, utiliza la función debounce que limita la cantidad de veces que se ejecuta una función',
    img: [],
    description: `
    1) Evita que una función se ejecute demasiado seguido Por ejemplo: <br/> <br/>
    a) Cuando escribes en un campo de búsqueda y quieres hacer llamadas a una API mientras escribes, pero que no se ejecute en cada tecla presionada. <br/> <br/>
    b) Cuando haces scroll y quieres que algo se ejecute solo después de que el usuario termine de hacer scroll. <br/> <br/>
    2)  npm install lodash
    `,
    codeOne: `
      import debounce from 'lodash/debounce';

      const handleInput = debounce((event) => {
        console.log('Buscando:', event.target.value);
      }, 300);

      // Luego lo usas en un input
      <input onInput={handleInput} />

    `,
    descriptionTwo: `
      Ejemplo con vue: <br/> <br/>
      1) Dentro del watch params.value.search sera igual a newValue solo cuando haya pasado los 0.8 segundos sin que textNameItem <br/> <br/>
      2) Cambie si va en el segundo 0.6 y textNameItem cambia de nuevo se reinica el valor de la funcion debounce y comienza de nuevo <br/> <br/>
    `,
    codeTwo: `
    <template>
      <div>
        <InputText class="w-20rem" v-model="textNameItem" placeholder="Item or Description Search" />
      <div>
    </template>

    <script setup lang="ts">
    import debounce from 'lodash/debounce'

    const textNameItem = ref('')

    const params = ref({
      search: '',
    })

    watch(textNameItem, debounce((newValue) => {
        params.value.search = newValue
      }, 800)
    )

    </script>
    `
  },
  {
    id: 7,
    idPlataform: FrameWorkAndLeguages.NodeJs,
    img: [id7img1],
    title: 'Crear un cron job',
    description: `
      1) Un cron job es una tarea programada que se ejecuta automáticamente en intervalos de tiempo definidos. <br/><br/>
      2) En Node.js usamos la librería node-cron  npm install node-cron
    `,
    codeOne: `
    import cron from 'node-cron'
    import { main } from '../logic/backupMain.js'

    cron.schedule('* * * * *', async () => {
        console.log('Ejecutando cron diario')
        try {
            await main()
        } catch (err) {
            console.error('❌ Error en cron:', err)
        }
    })
    `,
    descriptionTwo: `
      Esta expresión tiene 5 campos: <br/><br/>
      0 * * * *	Cada hora en el minuto 0 <br/><br/>
      0 0 * * *	Todos los días a medianoche <br/><br/>
      0 12 * * 1-5	A las 12:00 de lunes a viernes <br/><br/>
      */5 * * * *	Cada 5 minutos <br/><br/>
      30 14 * * *	Todos los días a las 2:30 PM <br/><br/>
      0 0 * * 0	Cada domingo a medianoche <br/><br/>
      */10 * * * *	Cada 10 minutos <br/><br/>
      0 9 * * 1-5	De lunes a viernes a las 9:00 AM <br/><br/>
      15 10 1 * *	A las 10:15 AM del día 1 de cada mes <br/><br/>
      Ejecuta la tarea cada minuto, de cada hora, de cada día, de cada mes, y cualquier día de la semana. <br/><br/>
      Puedes usar / para intervalos: */5 en el campo de minutos = cada 5 minutos <br/><br/>
      Puedes usar comas para múltiples valores: 1,15,30 en el campo de minutos = minuto 1, 15 y 30 <br/><br/>
      Puedes usar rangos: 1-5 en días de la semana = de lunes a viernes <br/><br/>
    `,
    codeTwo: `
      import express from 'express'
      import path from 'node:path'
      import cors from 'cors'
      import netsuiteRoutes from './routes/netsuite-routes.js'
      import './jobs/cron-backup.js' // <---------------------- importando el cron job


      const app = express()
      const __dirname = path.resolve()

      app.use(express.json({ limit: '50mb' }))
      app.use(cors())
      app.use(express.static('dist'))

      app.use('/api/netsuite', netsuiteRoutes)


      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
      })

      export default app
    `,
    descriptionThree: `
    1) En Node.js, nada se ejecuta automáticamente a menos que tú lo:<br/><br/>
    a) Llames directamente.<br/><br/>
    b) Lo importes y se ejecute al momento de importarse.<br/><br/>
    2) Este archivo por sí solo no se ejecuta automáticamente a menos que:<br/><br/>
     Lo importes en algún lugar (como se hizo en app.js):
    `
  },
  {
    id: 8,
    idPlataform: FrameWorkAndLeguages.TypeScript,
    title: '¿Qué es Record<K, V>?',
    description: `
    En TypeScript, Record<K, V> es una utilidad que permite declarar objetos donde: <br/>
    K: es el tipo de las claves (keys) del objeto. <br/>
    V: es el tipo de los valores (values) asociados a esas claves. <br/> <br/>
    En TypeScript, Record es un tipo genérico incorporado (una utility type) que ya viene incluido en el lenguaje. <br/>
    Es decir, no es una palabra reservada como if o const, pero sí es parte de la biblioteca de tipos estándar de TypeScript. <br/><br/>
    Record es:	Un tipo genérico nativo de TypeScript <br/>
    ¿Cómo lo interpreta? :	Como un objeto con claves y valores tipados <br/>
    ¿Cómo lo sabe? :	Porque está en su librería de tipos estándar <br/> <br/>
    La estructura de Record siempre sigue esta forma general: Record< K , V >   <br/>
    K puede ser: <br/>
    Un string, number, symbol  <br/>
    Un conjunto específico de strings (como 'a' | 'b' | 'c')  <br/>
    Un tipo que se pueda usar como clave de objeto  <br/>
    Importante: TypeScript restringe K a keyof any, es decir, claves válidas de objeto.  <br/><br/>
    Los dos puntos (:) en TypeScript (y también en lenguajes como TypeScript, C#, Swift) se usan para: <br/>
     Definir el tipo de una variable, constante, parámetro, propiedad o función. <br/><br/>

    Ejemplos prácticos <br/><br/>
    `,
    codeOne: `
      // 1. Claves dinámicas tipo string
      Record<string, number>
      // { [key: string]: number }

      const ejemplo1: Record<string, number> = {
        edad: 30,
        altura: 180
      };

      // 2. Claves fijas (más estricto y seguro)
      Record<'name' | 'email', string>
      // { name: string; email: string }

      const ejemplo2: Record<'name' | 'email', string> = {
        name: 'Julio',
        email: 'julio@correo.com'
      };

      // 3. Claves numéricas
      Record<number, boolean>
      // { [key: number]: boolean }

      const ejemplo3: Record<number, boolean> = {
        1: true,
        2: false
      };
    `,
    descriptionTwo: `
      ¿Qué tipo de estructuras modela Record? <br/>
      Solo objetos planos, no arrays, ni funciones, ni clases. <br/>
    `,
    codeTwo: `
      //type Ejemplo = Record<string, number>;

      const obj: Ejemplo = {
        a: 1,
        b: 2,
        c: 3
      };

      //No es un array

      const arr: Record<number, string> = ['a', 'b']; // ❌ Incorrecto

      //No es una función
      const fn: Record<string, Function> = () => {}; // ❌ Incorrecto

    `,
    descriptionThree: `
      Supongamos que estás modelando usuarios por su ID <br/>
      Aquí, el ID del usuario será un número (clave), <br/>
       y el valor será un objeto con propiedades como name, email y isActive.
    `,
    codeThree: `
      type User = {
        name: string;
        email: string;
        isActive: boolean;
      };

      const users: Record<number, User> = {
        101: {
          name: 'Julio Duran',
          email: 'julio@example.com',
          isActive: true
        },
        102: {
          name: 'Ana López',
          email: 'ana@example.com',
          isActive: false
        }
      };


      //Ejemplo: Catálogo de productos por categoría
      //Queremos representar un catálogo donde la clave es el nombre de la categoría (tipo string) y 
      // el valor es un objeto con información detallada de esa categoría.

      type Product = {
        id: number;
        name: string;
        price: number;
        metadata?: {
          tags: string[];
          dimensions?: {
            width: number;
            height: number;
          };
        };
      };

      const catalog: Record<string, Product> = {
        electronics: {
          id: 1,
          name: 'Smartphone',
          price: 699,
          metadata: {
            tags: ['mobile', 'touchscreen'],
            dimensions: {
              width: 7,
              height: 15
            }
          }
        },
        furniture: {
          id: 2,
          name: 'Chair',
          price: 120,
          metadata: {
            tags: ['wood', 'modern']
            // dimensions puede estar ausente porque es opcional
          }
        }
      };


    `
  },
  {
    id: 9,
    idPlataform: FrameWorkAndLeguages.Libraries,
    title: '@tanstack/vue-query',
    description: `
     @tanstack/vue-query es una biblioteca (una dependencia externa de NPM) diseñada específicamente para manejar data-fetching y gestión de estados del servidor en aplicaciones Vue. b\<br/>
    Es parte del ecosistema de TanStack Query, que incluye versiones para React, Solid, Svelte, y Vue. <br/> <br/>

    ¿Para qué sirve? ¿Qué problemas resuelve? <br/>
    Sin Vue Query: <br/>
    Tú mismo tienes que hacer todo esto manualmente: <br/><br/>

    Llamar a la API.<br/><br/>

    Guardar la respuesta en un ref o reactive.<br/><br/>

    Mostrar spinners.<br/><br/>

    Controlar errores.<br/><br/>

    Hacer reintentos.<br/><br/>

    Guardar en caché.<br/><br/>

    Revalidar al cambiar de página o volver al componente.<br/><br/><br/>

    Con Vue Query: <br/>
    Te abstrae todo eso automáticamente. <br/>

🚀 Beneficios clave <br/>

✅ Caching inteligente	Guarda los datos en caché y evita llamadas innecesarias.<br/>
🔄 Revalidación automática	Vuelve a hacer fetch si el usuario vuelve a una página, o después de una mutación.<br/>
🔁 Reintentos automáticos	Si una petición falla, puede reintentarse automáticamente.<br/>
🔃 Mutaciones declarativas	Usa useMutation() para manejar POST, PUT, DELETE con control total del flujo (onSuccess, onError, etc).<br/>
🧠 Estado sincronizado	El estado se sincroniza automáticamente con los datos del servidor.<br/>
🧪 Devtools integrados	Puedes ver en tiempo real los estados de tus queries (loading, error, success).<br/>
⏳ Control automático de loading y error	Puedes usar .isPending, .isError, .data, .error en lugar de manejarlo tú manualmente.<br/>
🔒 Evita duplicar llamadas	Si varias partes de tu app usan la misma query, Vue Query hace una sola llamada y comparte el resultado.<br/><br/>

npm install @tanstack/vue-query <br/><br/>
Y en tu main:
    `,
    codeOne: `
    import { VueQueryPlugin } from '@tanstack/vue-query'

    app.use(VueQueryPlugin)

    `,
    descriptionTwo: ` Ejemplo simple`,
    codeTwo: `
    import { useQuery } from '@tanstack/vue-query'

    const { data, isPending, isError } = useQuery({
      queryKey: ['user', userId],
      queryFn: () => fetch(/ api / user / $ { userId }).then(res => res.json())
    })

    //*Esto ya te da:

    data cuando la respuesta llega

    isPending para mostrar un spinner

    isError para manejar errores

    Reintentos, cache, invalidaciones... todo automático. *//

    //La función useMutation de @tanstack/vue-query recibe un objeto de configuración como argumento.

    const mutation = useMutation({

      mutationFn: async (variables) => {
        // Tu lógica para enviar datos a la API (POST, PUT, DELETE)
      },

      onSuccess: (data, variables, context) => {
        // Qué hacer si la mutación fue exitosa
      },

      onError: (error, variables, context) => {
        // Qué hacer si la mutación falla
      },

      onSettled: (data, error, variables, context) => {
        // Se ejecuta tanto en éxito como en error
      }

      retry: 3,                             // 🔁 reintentos si falla
      retryDelay: 1000,                     // ⏱ tiempo entre reintentos
      mutationKey: ['un-identificador']     // 🔑 opcional: útil para identificar la mutación

    })


    `,
    descriptionThree: `
      ¿Qué es queryClient.invalidateQueries()? <br /><br/>
      Es una función de vue-query que marca una o varias queries como "obsoletas" (invalidadas), lo que provoca que se vuelvan a <br/> ejecutar (refetch) para obtener datos actualizados del servidor. <br/><br/>
      📌 ¿Por qué es útil? <br/> <br/>
      Cuando haces una mutación (como crear, actualizar o eliminar datos), la caché que tenía esos datos ya no está actualizada. Entonces, <br/> invalidateQueries() le dice a Vue Query:
      <br/>
      “Oye, los datos relacionados con esta query podrían haber cambiado, ¡vuelve a consultarlos!”.<br/> <br/>
       Aquí después de actualizar la dirección (mutación), se marca como obsoleta la query con clave NETSUITE_COMPANIES_ADDRESS. <br/> Vue Query entonces:

      Llama nuevamente al queryFn asociado a esa queryKey. <br/>

      Refresca la UI con los datos nuevos. <br/>
    `,
    codeThree: `
    import { QUERIES_TAGS } from '@/const/queriesTags'
    import {updateEntityAddress, type UpdateEntityAddressProps} from '@/services/netsuiteCompaniesServices'
    import { useMutation, useQueryClient } from '@tanstack/vue-query'

    export default function useUpdateEntityAddress() {
      const queryClient = useQueryClient()
      const mutate = useMutation({
        mutationFn: async (body: UpdateEntityAddressProps['body']) => {
          const result = await updateEntityAddress({ body })

          if (result.error) throw new Error(result.error)

          return result
        },
        onSuccess: async (data) => {
          await queryClient.invalidateQueries({
            queryKey: [QUERIES_TAGS.NETSUITE_COMPANIES_ADDRESS]
          })
        }
      })
      return mutate
    }

    `,
    descriptionFour: `Diferencia entre useQuery y useMutation en @tanstack/vue-query:`,
    codeFour: `
    //Uso principal: Obtener y cachear datos desde una API o fuente remota.

    const { data, isLoading, error } = useQuery({
      queryKey: ['usuarios'],
      queryFn: () => fetchUsers()
    })

    //useMutation – Para modificar datos (POST, PUT, PATCH, DELETE)

    const mutation = useMutation({
      mutationFn: (nuevoUsuario) => createUser(nuevoUsuario),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['usuarios'] })
      }
    })

    `,
    descriptionFive: `
      🧨 Se usa cuando quieres hacer un cambio en el servidor. <br/>

      No se cachea automáticamente (tú decides qué hacer en onSuccess o onError). <br/>

      Lo ideal es que después de un cambio, llames a invalidateQueries() para que se recargue el dato actualizado. <br/>
    `,
    codeFive: `
    
    //useQueryClient – Para manejar la caché global
    const queryClient = useQueryClient()
    
    `,
    descriptionSix: `En @tanstack/vue-query siempre necesitas una queryKey cuando usas useQuery, y casi siempre es recomendable cuando trabajas <br/> 
    con invalidateQueries, refetchQueries, o setQueryData <br/>
    ¿Por qué es obligatoria en useQuery? <br/>
    La queryKey es la forma en que Vue Query identifica y gestiona la caché. Es como un "nombre único" para cada consulta. <br/>
    Vue Query usa queryKey para: <br/>
    Saber si ya tiene datos en caché. <br/>

    Decidir si debe volver a hacer la petición o no. <br/>

    Invalidar, refetchear, o actualizar ese query después (por ejemplo desde una mutación). <br/><br/>

    ¿Qué retorna useMutation()? <br/>
    mutate no es solo una función, es un objeto con forma más o menos así: <br/><br/>

    `,
    codeSix: `
    {
      mutate: Function,
      mutateAsync: Function,
      isPending: Ref<boolean>,
      isSuccess: Ref<boolean>,
      isError: Ref<boolean>,
      status: Ref<"idle" | "pending" | "success" | "error">,
      ...
    }

    {
      mutate,        // 🔘 función para ejecutar la mutación
      mutateAsync,   // 🔘 versión async/await de mutate
      isPending,     // ⏳ true mientras se ejecuta
      isSuccess,     // ✅ true si terminó bien
      isError,       // ❌ true si hubo error
      error,         // 💥 el error si falló
      data           // 📦 el resultado de la mutación
    }

    //cuando llamas a la funcion en tu componente puedes hacer 
    
    const { mutate, isPending, isError, status} = useUpdateEntityAddress()

    `,
    descriptionSeven: `
      ¿Qué recibe useQuery? <br/>
      Recibe un objeto de configuración, usualmente con: <br/>
    `,
    codeSeven: `
      useQuery({
      queryKey: ['un-identificador-unico'], // 🔑 clave para caché e invalidación
      queryFn: async () => { ... },         // 📡 función que hace el fetch
      enabled: true | false,                // ❓ si se debe ejecutar automáticamente
      staleTime: 10000,                     // ⏳ tiempo que considera los datos "frescos"
      refetchOnWindowFocus: true,          // 🔁 si refetch al enfocar ventana
      ...otros callbacks opcionales
    })

    `,
    descriptionEight: `
      ¿Qué retorna useQuery? <br/>
      Un objeto con múltiples propiedades, entre ellas: <br/>
    `,
    codeEight: `
      {
        data,         // ✅ los datos que devolvió la query
        isLoading,    // 🔄 está cargando por primera vez
        isFetching,   // 🔁 está haciendo fetch (incluso después del primero)
        isError,      // ❌ hubo error
        error,        // 🧾 el error lanzado (si existe)
        refetch,      // 🔁 función para volver a hacer fetch manualmente
        status,       // 'loading' | 'error' | 'success'
      }
    `,
    descriptionNine: `
    ¿Cómo funciona mutate(variables, options)? <br/>
    La función mutate acepta dos argumentos opcionales: <br/>

    variables: los datos que necesita tu mutationFn (en este caso, los datos del address). <br/>

    options: overrides o callbacks específicos para esa invocación de mutate (como onSuccess, onError, etc.). `,
    codeNine: `
      mutate(
        {
          customerId: address.value.entity,
          addressbookId: address.value.nKey,
          ...
        },
        {
          onSuccess: (result) => { ... },
          onError: (error) => { ... }
        }
      )
    `,
    descriptionTen: `
      Esto significa: <br/>

      🚀 Ejecuta mutationFn con el objeto como argumento. <br/>

      🧩 Ejecuta callbacks específicos onSuccess o onError solo para esta llamada. <br/>

      ✅ Si la mutación tiene éxito, ejecuta: <br/>

      El onSuccess definido aquí, si existe. <br/>

      Y también el onSuccess global que definiste en useMutation(...). <br/><br/>

      En resumen:<br/>
      mutate() puede aceptar un objeto con los datos a enviar (variables) y un segundo objeto con opciones (onSuccess, onError, etc.).<br/>

      Puedes tener callbacks globales (en la definición) y específicos (por invocación).<br/>

      Esto es muy útil cuando una mutación se reutiliza en varios lugares con diferentes necesidades de manejo de resultado.<br/>

      Primero se ejecuta el onSuccess definido en useMutation(...) <br/>
      Luego se ejecuta el onSuccess que pasas en la llamada a mutate(...)<br/> <br/> <br/> <br/>

      La queryKey es un array que actúa como identificador único para la caché de la query dentro de React Query. <br/> <br/>

      ¿Por qué se usa un array? <br/>
      React Query permite que la queryKey sea un string o un array. El array es preferido cuando necesitas variar  <br/>
      partes del identificador dinámicamente (como parámetros). Este array le dice a React Query:  <br/>
      queryKey: [QUERIES_TAGS.ZOHO_DEALS, params],<br/>
      “Esta consulta está relacionada con ZOHO_DEALS, y además depende de los params.” <br/> <br/>

      ¿Qué representan esas 2 propiedades?<br/>
      QUERIES_TAGS.ZOHO_DEALS:<br/><br/>

      Es una constante (probablemente un string) que representa el nombre base o general <br/>
      de la consulta, por ejemplo: 'zoho_deals'. <br/><br/>

      Sirve para agrupar o identificar todas las queries relacionadas a "Deals".<br/><br/>

      params:<br/>

      Es un objeto Reactivo (ref o reactive) que contiene parámetros variables (como cvid, criteria, page, etc.).<br/>

      Al incluirlo en la queryKey, React Query vuelve a ejecutar la query automáticamente cuando estos parámetros<br/>
       cambian, porque cambia el valor de la key. <br/><br/><br/>

       ¿Para qué sirve esto?<br/><br/>
      Caché inteligente:<br/>

      React Query guarda el resultado de cada combinación de queryKey. Así puede reutilizar los datos <br/>
      si ya se ha hecho una consulta con esos mismos parámetros. <br/>

      Ejemplo: si haces una consulta con page = 1 y luego vuelves a esa página, no vuelve a llamar a la API, usa la caché.<br/><br/>

      Revalidación automática:<br/>

      Si el valor de params cambia (por ejemplo, cambia el criteria o page), React Query detecta que la queryKey ha cambiado y vuelve a ejecutar la consulta automáticamente.
    `
  },
  {
    id: 10,
    idPlataform: FrameWorkAndLeguages.Git,
    title: "Crear y cambiar entre ramas",
    description: `
      Para crear una nueva rama en Git llamada julio, puedes usar el siguiente comando en tu terminal:
    `,
    codeOne: `
      git branch julio
    `,
    descriptionTwo: `
      Eso crea la rama, pero no cambia a ella. Para crearla y cambiarte directamente a esa rama, usa:
    `,
    codeTwo: `
    git checkout -b julio
    `,
    descriptionThree: `
    O en versiones más recientes de Git, puedes usar:
    `,
    codeThree: `
    git switch -c julio
    `,
    descriptionFour: `
    Si la rama ya existe, para cambiarte a ella no usas -b
    `,
    codeFour: `
    git checkout julio
    `,
    descriptionFive: `
    o con la sintaxis moderna:
    `,
    codeFive: `
    git switch julio
    `
  },
  {
    id: 11,
    idPlataform: FrameWorkAndLeguages.Vite,
    title: 'Acceso a las variables de entorno del archivo .env',
    description: `
    Con Vite en un proyecto Vue tienes acceso a las variables de entorno definidas en archivos .env.
    <br/> 
    Pero hay un detalle importante: las variables de entorno que quieras usar en el código cliente (Vue) deben empezar con el prefijo VITE_. <br/>
    Por ejemplo, si tienes en .env:
    `,
    codeOne: `
    VITE_API_URL=https://api.midominio.com
    `,
    descriptionTwo: `
    En tu código Vue puedes acceder con:
    `,
    codeTwo: `
    console.log(import.meta.env.VITE_API_URL)
    `,
    descriptionThree: `Sin el prefijo VITE_, las variables no estarán disponibles en el cliente por seguridad.
    <br/>
    Además, Vite soporta varios archivos .env según el modo (.env, .env.production, .env.local, etc.).`
  },
  {
    id: 12,
    idPlataform: FrameWorkAndLeguages.Git,
    title: 'Configurar el gitignore',
    description: `
    Para evitar que tu archivo .env se suba a GitHub, debes agregarlo al archivo .gitignore de tu proyecto. <br />
    Abre el archivo .gitignore que está en la raíz del proyecto. <br/>
    Si no existe, créalo <br/>
    Agrega esta línea:
    `,
    codeOne: `
    .env
    `,
    descriptionTwo: `
    Si tienes más de uno (por ejemplo .env.local, .env.production), puedes ignorarlos todos con:
    `,
    codeTwo: `
    .env*
    `,
    descriptionThree: `
    Guarda el archivo.
    <br />
    Si ya habías subido .env antes, Git seguirá rastreándolo aunque lo pongas en .gitignore.<br />
    En ese caso, primero tienes que quitarlo del índice de Git (sin borrarlo localmente):
    `,
    codeThree: `
    git rm --cached .env
    `,
    descriptionFour: `
    Y luego confirmas el cambio:
    `,
    codeFour: `
    git commit -m "Stop tracking .env file"
    `,
    descriptionFive: `
    Después de eso, el .env quedará solo en tu máquina y GitHub no lo recibirá más
    `
  },
  {
    id: 13,
    idPlataform: FrameWorkAndLeguages.Supabase,
    title: 'Configurar Supabese en Vue',
    img: [id13img1, id13img2, id13img3, id13img4, id13img5, id13img6],
    description: `
    Para configurar supabase primero tenemos que crear el cliente segun la documentacion de supabase que se encuentra en <br/>
    API Docs como se muestra en la imagen (1) hay que crear un cliente que seria el siguiente 
    `,
    codeOne: `
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

    export const supabase = createClient(supabaseUrl, supabaseKey)

    `,
    descriptionTwo: `
    Se optienen la supabaseUrl y la supabaseKey de la documentacion del proyecto de supabase en el apartado de setings <br/>
    en la pestaña de Data API encontramos la supabaseUrl como se muestra en la imagen numero (2) <br/><br/>
    Y en API Keys se encuentra la supabaseKey que seria la anon public como se muestra en la imagen numero (3) <br/><br/>
    Se configuran la variables de entorno en este caso estamos usando la configuracion de VITE que nos permite establecer la variables<br/>
    de entorno  en el archivo .env
    `,
    codeTwo: `
    VITE_SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcW1ubW5ocnFvcnZqbXByc29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzUxNTAsImV4cCI6MjA3MDI1MTE1MH0.ciVobNdmwx27Iyfil6JZ7DC3he_1egerVwouxWuW8Os'
    VITE_SUPABASE_URL='https://woqmnmnhrqorvjmprsoe.supabase.co'
    `,
    descriptionThree: `
    Una ves creado en cliente tenemos que instalar la libreria de supabase, esa informacion la encontramos en API Docs en la opcion de <br/>
    Introduction como se muestra en la imagen numero (4) se le da a la opcion de Docs <br/><br/>
    Eso nos llevara a la documentacion Rest Api como se muestre en la imagen (5) en la cuen encotraremos la opcion Client Libraries <br/>
    hay tendremos que seleccionar la documentacion del lenguje que estamos usando en este caso es javascript/typescript le damos al boto de Docs <br/><br/>
    una ves precionado ese boton nos llevara a la documetacion de supabase de javascript como muestra en la imagen (6) y hay nos muestra que tendremos que instalar la <br/>
    libreria de supabase
    `,
    codeThree: `
    npm install @supabase/supabase-js
    `
  },
  {
    id: 14,
    idPlataform: FrameWorkAndLeguages.Supabase,
    title: 'Crear sistema de login de supabse por emil OTP Email one-time passwords (OTP)',
    img: [id13img7, id13img8, id13img9, id13img10, id13img11],
    description: `
    segun la documentacion de supabase de Email one-time passwords (OTP) <br/><br/>
    https://supabase.com/docs/guides/auth/auth-email-passwordless?utm_source=chatgpt.com&queryGroups=language&language=js <br/><br/>
    
    1).- Primero hay que activar el servicion de auntenticacion por email<br/>
    2).- Como se muestra en la imagen (1) ir a la pestaña aunthentication luego en la imagen numero (2) en la opcion <br/>
    sing in/providers, en el apartado de Auth providers, Email tiene que estar Enabled, y las opciones <br/> <br/>
    *Allow new users to sign up  <br/>
    *Confirm email  <br/>
    hay que activarlos por seguridad <br/> <br/>
    
    (3).- Nos vamos a el apartado de Email que esta dentro de Auntenticacion hay podemos ver las plantillas que llegan por email <br/>
    escojemos la plantilla magic link que es la que se usa tamto para Magic link como para otp y como dice la documentacion de supabase <br/>
    en la imagen numero (4) hay que modificar el tamplate e incluir el {{ .Token }} que es la variable que contiene el otp
    `,
    descriptionTwo: `
    Una ves echo eso ya podemos configurar el codigo para enviar un correo el codigo seria el siguiente <br/>
    Obtenga el correo electrónico del usuario y llame al método "signInWithOtp" desde su biblioteca de cliente.
    `,
    codeTwo: `
    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'valid.email@supabase.io',
      options: {
        // Establezca esto como falso si no desea que el usuario se registre automáticamente
      shouldCreateUser: false,
      },
    })
    `,
    descriptionThree: `
    Si la solicitud es exitosa, recibirá una respuesta con error: null un dataobjeto donde tanto " user " como session "son nulos". <br/>
    Avise al usuario que revise su bandeja de entrada. <br/><br/>
    Si establecemos shouldCreateUser: false, en false tenemos que agregar manualmente un usuario en nuestra base de datos en la tabla de auth.users <br/>
    como se muestra en la imagen numero (5) de esta manera el sistema verificara que el user se encuentra en la DB y podra enviar el codigo de validacion otp! <br/>
    cuando el usuario no se encuentra registrado en la tabla auth user manda un error <br/><br/>

    AuthApiError: Signups not allowed for otp <br/><br/>

    lo cual significa que el usuario no se encuentra registrado el la DB <br/>
    si colocamos shouldCreateUser: true, los usuarios se registran automaticamente y no daria el error ! <br/><br/>

    Luego procedemos con la validacion del otp que sera la siguiente, <br/>
    Llame al método "verifyOtp" desde su biblioteca de cliente con la dirección de correo electrónico del usuario, el código y un tipo de email:
    `,
    codeThree: `
    const {data: { session }, error } = await supabase.auth.verifyOtp({
      email: 'email@example.com',
      token: '123456',
      type: 'email',
    })
    `,
    descriptionFour: `
    Si tiene éxito, el usuario habrá iniciado sesión y recibirá una sesión válida que se verá así:
    `,
    codeFour: `
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjI3MjkxNTc3LCJzdWIiOiJmYTA2NTQ1Zi1kYmI1LTQxY2EtYjk1NC1kOGUyOTg4YzcxOTEiLCJlbWFpbCI6IiIsInBob25lIjoiNjU4NzUyMjAyOSIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6InBob25lIn0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.1BqRi0NbS_yr1f6hnr4q3s1ylMR3c1vkiJ4e_N55dhM",
      "token_type": "bearer",
      "expires_in": 3600,
      "refresh_token": "LSp8LglPPvf0DxGMSj-vaQ",
      "user": {...}
    }
    `

  },
  {
    id: 15,
    idPlataform: FrameWorkAndLeguages.TypeScript,
    title: 'Interface',
    description: `
    En TypeScript, un interface (interfaz) es una forma de definir la estructura que debe tener un objeto, función o clase. <br/>
    Sirve como un contrato que indica qué propiedades y tipos debe tener algo, sin importar cómo esté implementado.<br/><br/>

    Piensa en una interfaz como un molde o plantilla que describe la forma de los datos, pero no contiene la lógica ni valores concretos.
    `,
    codeOne: `
    interface Persona {
      nombre: string;
      edad: number;
      saludar(): void;
    }

    const usuario: Persona = {
      nombre: "Julio",
      edad: 30,
      saludar() {
        console.log('Hola, soy $ {this.nombre}');
      },
    };
    `,
    descriptionTwo: `
    En Vue 3 (con TypeScript), cuando usas ref() o reactive() puedes tipar el valor usando genéricos con <>.
    `,
    codeTwo: `
    interface FileInfo {
      name: string
      size: number
      lastModified?: number
    }

    const file = ref<FileInfo | null>(null)

    `,
    descriptionThree: `
    ref<...> → le pasas el tipo que quieres que maneje la ref. <br/>
    FileInfo | null → es la definición de tipo: puede ser un objeto FileInfo o null. <br/>
    Esto es útil porque al inicio normalmente no tienes ningún archivo cargado (null), <br/>
    pero más tarde asignarás un objeto que siga la forma de FileInfo. <br/><br/>

    Si no le pasas el tipo, Vue intenta inferirlo a partir del valor inicial.<br/>
    Pero como tu valor inicial es null, Vue/TypeScript asumiría que siempre será null y después te daría error si intentas poner un FileInfo. <br/><br/>

    Si el valor inicial ya es del tipo correcto: <br/>
    const count = ref(0) // TypeScript infiere que es Ref < number > <br/><br/>
    Pero si empiezas con null, TypeScript cree que siempre será null si no usas tipo explícito: <br/>
    const file = ref(null) // TypeScript cree que es Ref < null > ❌ <br/><br/>

    Regla práctica:<br/>
    Si inicializas con un valor claro → no necesitas <>.<br/>
    Si inicializas con null o un valor ambiguo → usa <> para decirle a TS el tipo esperado.<br/><br/>

    Cuando las propiedades son obligatorias
  `,
    codeThree: `
    interface User {
      name: string
      age: number
    }

    const user = ref<User>({ name: '', age: 0 }) // ✅ Debes poner ambas

    const user = ref<User>({ name: '' }) // ❌ Error: falta 'age'
    `,
    descriptionFour: `
    Si las propiedades son opcionales (?)
    `,
    codeFour: `
      interface User {
      name?: string
      age?: number
    }

    const user = ref<User>({}) // ✅ No es necesario ponerlas
    `
  },
  {
    id: 16,
    idPlataform: FrameWorkAndLeguages.TypeScript,
    title: 'Tipado de funciones',
    description: `
      Ejemplo de la funcion tipada
    `,
    codeOne: `
    const calcularHorasTranscurridas = (start: string, end: string): string | null => {
      if (!start || !end) return null;
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffMs = endDate.getTime() - startDate.getTime(); // ✅ usar getTime() devuelve number
      return (diffMs / (1000 * 60 * 60)).toFixed(2);
    }
    `,
    descriptionTwo: `
    lo que está dentro de los paréntesis (start: string, end: string) <br/>
    son los tipos de los parámetros de la función. <br/> <br/>

    Y lo que está después de los paréntesis y los dos puntos (: string | null)  <br/>
    es el tipo de retorno de la función, o sea, qué tipo de dato va a devolver. <br/><br/>

    start: string → parámetro start debe ser un string<br/>
    end: string → parámetro end debe ser un string<br/>
    : string | null → la función devolverá un string o null<br/>
    (ese | significa unión de tipos puede ser string o null)  <br/>
    ¿Por qué string | null y no solo string? <br/>
    En la funcion esta <br/>
    `,
    codeTwo: `
    if (!start || !end) return null;
    `,
    descriptionThree: `
    Entonces hay dos casos: <br/>
    Si start o end no existen → devuelves null <br/>
    Si ambos existen → devuelves un string (toFixed(2) siempre devuelve un string) <br/>
    sta función a veces devuelve un string y a veces devuelve null
    `
  },
  {
    id: 17,
    idPlataform: FrameWorkAndLeguages.TypeScript,
    title: 'Configuracion de el archivo tsconfig.json para que TypeScript sepa qué tipo asignarle a un archivo .png por defecto.',
    description: `
    En la raíz de tu proyecto (o dentro de src/), crea un archivo llamado por ejemplo: <br/>
    src/env.d.ts <br/>
    o <br/>
    src/shims-vue.d.ts <br/><br/>
    Dentro agrega:
    `,
    codeOne: `
    declare module '*.png' {
      const value: string
      export default value
    }

    declare module '*.jpg' {
      const value: string
      export default value
    }

    declare module '*.jpeg' {
      const value: string
      export default value
    }

    declare module '*.svg' {
      const value: string
      export default value
    }

    `,
    descriptionTwo: `
    Guarda y reinicia el servidor de desarrollo (npm run dev o yarn dev). <br/>
    Con esto, TypeScript ya sabrá que cuando importas un .png, realmente es una cadena con la ruta final de la imagen. <br/><br/>
    Lo que hace que tu proyecto lo lea no es el nombre del archivo, sino la extensión .d.ts y el <br/>
    hecho de que esté en una carpeta incluida en el tsconfig.json.<br/><br/>
    .d.ts → significa “archivo de declaración de tipos” (type declarations). <br/>
    TypeScript los busca automáticamente para saber cómo manejar tipos que no reconoce de forma nativa. <br/>
    El nombre (env, shims-vue, etc.) → realmente no importa para TypeScript. <br/>
    Puedes llamarlo imagenes.d.ts si quieres. Lo importante es que: <br/>
    Esté dentro de un directorio incluido por "include" en tu tsconfig.json. <br/>
    Termine en .d.ts. <br/>
    Ejemplo de tsconfig.json típico en un proyecto Vue 3 con TypeScript:
    `,
    codeTwo: `
    {
      "extends": "@vue/tsconfig/tsconfig.dom.json",
      "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
      "exclude": ["src/**/__tests__/*"],
      "compilerOptions": {
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

        "paths": {
          "@/*": ["./src/*"]
        }
      }
    }
    `,

    descriptionThree: `
    Eso significa que TypeScript solo va a leer: <br/>
    Un archivo que se llame exactamente env.d.ts en la raíz del proyecto. <br/>
    Todo lo que esté dentro de src/ (incluyendo .d.ts que estén ahí). <br/>
    Si pones tu declaración de imágenes como imagenes.d.ts pero en la raíz, no la va a leer (porque no está en "include").<br/>

    Si la pones como imagenes.d.ts dentro de src/, sí la va a leer (porque src/**/* está incluido).<br/>

    Si la dejas en la raíz, tiene que llamarse env.d.ts para que funcione con tu configuración actual.<br/>
    `
  },
  {
    id: 18,
    idPlataform: FrameWorkAndLeguages.Supabase,
    title: 'Validar la seccion activa del usuario en supabase',
    description: `
      Qué pasa cuando haces login en Supabase <br/>
      Supabase autentica al usuario y devuelve un access token y un refresh token.<br/>
      Esos tokens se guardan automáticamente en: <br/>
        localStorage (por defecto en web) <br/>
        y también en memory mientras la app esté abierta. <br/>
      La librería de Supabase (cliente JS) recupera esos tokens de localStorage cada vez que se inicializa.<br/>
      Cómo sabe si la sesión sigue activa <br/>
    `,
    codeOne: `
      const { data: dataUser } = await supabase.auth.getUser()
    `,
    descriptionTwo: `
      El cliente: <br/>
      Busca el token en localStorage. <br/>
      Si lo encuentra y no está vencido, lo usa para pedir al backend el usuario actual. <br/>
      Si el access token está vencido pero existe el refresh token, Supabase lo renueva automáticamente y actualiza localStorage. <br/>
      Si no hay tokens válidos → devuelve que no hay sesión <br/>
    `
  },
  {
    id: 19,
    idPlataform: FrameWorkAndLeguages.TypeScript,
    title: 'Tipado de props en Vue3',
    description: `
      En Vue con TypeScript puedes tipar tus props de dos formas: <br/><br/>
      1. Con un tipo o interfaz de TypeScript <br/>
      Si ya sabes qué propiedades tiene tu objeto (id, etc.), lo mejor es crear un tipo o interfaz:
    `,
    codeOne: `
      <script setup lang="ts">
        interface DashboardBackup {
          id: number
          name: string
          createdAt: string
        }

        const props = defineProps<{
          dashboardBackup: DashboardBackup
        }>()
      </script>
    `,
    descriptionTwo: `
      2. De forma inline (más rápida, sin interfaz) <br/><br/>
      Si quieres hacerlo directamente sin declarar la interfaz aparte:
    `,
    codeTwo: `
      <script setup lang="ts">
        const props = defineProps<{
          dashboardBackup: {
            id: number
            name: string
            createdAt: string
          }
        }>()
      </script>

    `
  },
  {
    id: 20,
    idPlataform: FrameWorkAndLeguages.Supabase,
    title: `Obtener informacion de una tabla de supabase que este relacionada con otras tablas`,
    description: `
    En este ejemplo consultamos la tabla tmc de Supabase lo cual tiene una columna status_payment relacionada con la tabla tmc_status_payment <br/>
    y en vez de devolverte el id de la tabla relacionada (tmc_status_payment) te devuelva directamente el nombre del estado (status) que se encuentra en la tabla tmc_status_payment. <br/>
      En Supabase, cuando tienes una relación declarada con Foreign Key puedes hacer el select con nested relationships. <br/><br/>
      Suponiendo que en tu tabla tmc tienes algo como: <br/><br/>
      status_payment → referencia al campo id de la tabla tmc_status_payment.
    `,
    codeOne: `
      const { data: respTmc, error } = await supabase
      .from('tmc')
      .select('*,tmc_status_payment:status_payment (status)')
      .eq('record_id', id)
    `,
    descriptionTwo: `
    tmc_status_payment:status_payment → le dices a Supabase que la columna status_payment <br/>
     en tmc está relacionada con la tabla tmc_status_payment.<br/><br/>

    (status) → seleccionas solo la columna status en lugar de todo el objeto. <br/><br/>

    En la sintaxis de Supabase/PostgREST, la parte antes de los dos puntos (:) es el alias que tú eliges, <br/>
    y lo que va después de los dos puntos debe ser el nombre de la columna de tu tabla actual (tmc) que contiene la relación. <br/><br/>

    En la tabla tmc, tienes la columna status_payment que es un foreign key hacia tmc_status_payment.id. <br/>
    La tabla relacionada es tmc_status_payment, y de ahí quieres obtener la columna status. <br/>
    tmc_status_payment → es un alias (usualmente lo ponemos igual al nombre real de la tabla para claridad, pero puede ser cualquier nombre). <br/>
    status_payment → debe coincidir exactamente con la columna en tmc que tiene la relación (el foreign key). <br/>
    (status) → son las columnas que quieres traer de la tabla relacionada. <br/><br/>
    Ejemplo práctico:
    `,
    codeTwo: `
      .select('
        id,
        record_id,
        tmc_status_payment:status_payment (status)
      ')
    `,
    descriptionThree: `
      Si quieres todas las columnas de la tabla relacionada tmc_status_payment, en vez de poner (status) simplemente usas (*).
    `,
    codeThree: `
      .select('
        *,
        tmc_status_payment:status_payment (*)
      ')
    `

  },
  {
    id: 21,
    idPlataform: FrameWorkAndLeguages.Resend,
    title: 'Integracion de Resend en Node.js',
    description: `
      Resend es un servicio/API (con librerías oficiales para distintos lenguajes) que se usa principalmente <br/>
      para enviar emails transaccionales y de marketing de forma sencilla. <br/> <br/>

      Instalacion 
    `,
    codeOne: `
      npm install resend

    `,
    descriptionTwo: `
      Configuración o cliente de Resend en Node.js <br/><br/>
      Importa la clase Resend desde la librería oficial de npm. <br/>
      Toma la clave de API de Resend desde las variables de entorno (.env). <br/>
      Usa VITE_RESEND_API_KEY como nombre (típico en proyectos con Vite/React/Next.js). <br/>
      Si no existe, le asigna un string vacío. <br/>
      Si la API key no está configurada, lanza un error para avisar que no se puede usar Resend. <br/>
      Crea una instancia de Resend con la API Key. </br>
      La exporta para que en cualquier parte del proyecto puedas importar resend y enviar correos sin tener que reconfigurarlo cada vez.
    `,
    codeTwo: `
      import { Resend } from 'resend'

      const resendApiKey = process.env.VITE_RESEND_API_KEY || ''

      if (!resendApiKey)
        throw new Error('Missing Resend API KEY, searching in env file')

      export const resend = new Resend(resendApiKey)
    `,
    descriptionThree: `
      Configuracion del controlador en Node.js <br/><br/>
      importamos el cliente de resend que hemos confirmado anteriormente <br/>
      utilizamos la instacion que configuramos(cliente de resend) y luego usamos los metodos emails.send(...)<br/>
      data devuelve la respuesta de la API (ejemplo: ID del correo enviado). <br/>
      error devuelve información si algo salió mal (ejemplo: API key inválida, dominio no verificado, etc.). <br/>
      luego configuramos el objeto de resend <br/>
      from: domino creado en resend verificado <br/>
      to: array de emails a los que se les enviar la informacion <br/>
      subject: es el subject del email que llegara a los correos
      html: es un template de lo que se enviara por correo elecctronico <br/>
      text: Contenido del correo en texto plano (sin HTML). Se usa como fallback para clientes que no soportan HTML o si no usas plantilla. <br/>
      template: Se refiere a una plantilla guardada en Resend (en el dashboard o vía API). En lugar de poner el HTML a mano, le dices: “usa la plantilla depositRequest”. <br/>
      params: Son los valores dinámicos que la plantilla puede necesitar.<br/>
      Ejemplo: si tu plantilla depositRequest tiene un placeholder como {{depositUrl}}, Resend lo reemplazará por el valor que envías en params.depositUrl.
    `,
    codeThree: `
    {
      subject: 'Deposit',
      text: '',
      from: 'Poggesi USA <noreply@poggesiusa.com>',
      to: emails.value,
      template: 'depositRequest',
      params: {
        depositUrl: 'https///deposit.com'
      }
    `,
    codeFour: `
      import { resend } from '../libs/resend.js'

      export async function resendSendEmailController(req, res) {
        const body = req.body

        const { data, error } = resend.emails.send({
                from: 'tu@dominio.com',
                to: ['correo1@ejemplo.com', 'correo2@ejemplo.com', 'correo3@ejemplo.com'],
                subject: 'Hola desde Resend',
                html: '<strong>Este es un correo de prueba</strong>',
              })
        

        if (error) {
          return res.status(400).json({
            error: error.message,
            data: null
          })
        }

        return res.status(200).json({
          data,
          error: null
        })
      }


    `,
    descriptionFive: `
      Creamos un archivo de rutas para resend en nuestra carpeta routes para tener las rutas de resend separadas de las demas
    `,
    codeFive: `
      import { Router } from 'express'
      import { resendSendEmailController } from '../controllers/resend-controller/resend-controller.js'

      const router = Router()

      router.post('/send', resendSendEmailController)

      export default router
    `,
    descriptionSix: `
      importamos nuestras rutas en el arrchivo app.js de nuestro server en node.js ejemplo del archivo app.js
    `,
    codeSix: `
      import express from 'express'
      import path from 'node:path'
      import cors from 'cors'
      import resendRoutes from './routes/resend-routes.js'

      console.log('Server time:', new Date().toString());
      const app = express()
      const __dirname = path.resolve()

      app.use(express.json({ limit: '50mb' }))
      app.use(cors())
      app.use(express.static('dist'))

      app.use('/api/resend', resendRoutes)


      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
      })

      export default app
    `



  },
  {
    id:22,
    idPlataform: FrameWorkAndLeguages.Libraries,
    title: 'Libreria Lodash, utiliza la función cloneDeep para crear una copia profunda de un objeto en JavaScript',
    description: `
      La función cloneDeep de la librería Lodash se utiliza para crear una copia profunda (deep copy) de un objeto en JavaScript. <br/>
      A diferencia de una copia superficial (shallow copy), que solo copia las referencias a los objetos anidados, <br/>   
      Crea una copia completamente independiente del objeto original, incluyendo objetos y arrays anidados dentro de él. <br/><br/>
      Esto es útil cuando quieres modificar la copia sin afectar el objeto original. <br/><br/>
      Ejemplo de uso:
    `,
    codeOne: `
      import { ref } from 'vue'
      import { cloneDeep } from 'lodash-es'

      const initialQuote = ref<Quote | null>(null)

      function setInitialQuote(quote: Quote) {
        initialQuote.value = cloneDeep(quote)
      }
      `
  },
  {
    id: 23,
    idPlataform: FrameWorkAndLeguages.Libraries,
    title: 'Libreria Lodash, utiliza la función isEqual para comparar dos objetos en JavaScript',
    description: `
      La función isEqual de la librería Lodash se utiliza para comparar dos valores en JavaScript y determinar si son iguales en contenido y estructura. <br/>
      A diferencia del operador de igualdad estricta (===), que solo compara referencias para objetos, isEqual realiza una comparación profunda propiedades, arrays, objetos anidados, valores primitivos (deep comparison). <br/> 
      Devuelve: true si los valores son iguales, false si no lo son. <br/><br/>
      Ejemplo de uso:
    `,
    codeOne: `
      import { ref } from 'vue'
      import { isEqual } from 'lodash-es'

      const initialQuote = ref<Quote | null>(null)
      const currentQuote = ref<Quote | null>(null)

      function hasQuoteChanged(): boolean {
        return !isEqual(initialQuote.value, currentQuote.value)
      }
      `,
    descriptionTwo: `
      En este ejemplo, isEqual compara initialQuote.value y currentQuote.value profundamente. <br/>
      Si son iguales en contenido y estructura, devuelve true; si hay alguna diferencia, devuelve false. <br/>
      Esto es útil para detectar cambios en objetos complejos sin preocuparte por referencias.
    `
  },
  {
    id: 24,
    idPlataform: FrameWorkAndLeguages.Redis,
    title: 'Configurar Redis en Node.js',
    img: [id24img1],
    descriptionTwo: `
      Redis no tiene soporte oficial para Windows. El equipo de Redis desarrolla el software específicamente para sistemas POSIX (Linux, BSD, etc.) <br/>
      una de las opciones de usar redis en windows es usar Docker para ejecutar Redis en un contenedor. <br/><br/>
      priemro tienes que instalar Docker Desktop en tu máquina con Windows. <br/><br/>
      una vez instalado Docker, tienes que crear en la raiz de tu proyecto un archivo llamado docker-compose.yml con el siguiente contenido:
      `,
    codeTwo:`
      services:
        redis:
          image: redis
          container_name: redis-server
          ports:
            - '6379:6379' 
      `,
      descriptionThree: `esto le dice a Docker que quieres ejecutar un contenedor con la imagen oficial de Redis, nombrarlo redis-server y exponer el puerto 6379 (puerto por defecto de Redis) <br/> para que puedas conectarte desde tu aplicación Node.js. <br/><br/>
      Luego, en tu terminal, navega a la raíz de tu proyecto y ejecuta el siguiente comando para iniciar el contenedor de Redis: <br/><br/>
      docker-compose up -d <br/><br/>
      Esto descargará la imagen de Redis (si no la tienes) y ejecutará el contenedor en segundo plano. <br/> revisar la imagen numero uno para ver como es la conexion de docker al ejecutar el comando <br/><br/>
      Ahora instalamos la librería de Redis para Node.js, que se llama redis. <br/><br/>
      npm install redis <br/><br/>
      Luego se crea un cliente de Redis en la carpeta libs en tu aplicación Node.js para conectarte al servidor Redis que está corriendo en Docker. <br/><br/>
      `,
      codeThree:`
      import { createClient } from 'redis'

      const redisClient = createClient({
        url: 'redis://localhost:6379'
      })

      // Manejo de errores básico para que no se caiga el servidor si Redis falla
      redisClient.on('error', (err) => console.log('Redis Client Error', err))

      // Conectamos el cliente (importante en la v4 de Redis)
      await redisClient.connect()

      export { redisClient }

      `,
      descriptionFour: `
      Con esto, tu aplicación Node.js ya está configurada para usar Redis a través de Docker en Windows. <br/><br/>
      Puedes usar redisClient para realizar operaciones de lectura/escritura(redisClient.get, /redisClient.set) en Redis desde tu código Node.js.
     `,
     codeFour:`
      import { redisClient } from '../libs/redis/redisClient.js'

      export async function getNetsuiteClassificationController(req, res) {
        try {
          
          const replayedResult = await redisClient.get('netsuite_classifications')

          if (replayedResult) return res.status(200).json(JSON.parse(replayedResult))

          const query = 'SELECT * FROM  classification'

          const result = await querySuiteQL({
            query,
            limit: 1000
          })

          const saveResult = await redisClient.set(
            'netsuite_classifications',
            JSON.stringify(result)
          )

          res.status(200).json(result)
        } catch (error) {
          console.error('Error getNetsuiteClassificationController:', error.stack)
          res.status(500).json({ error: 'Internal Server Error' + error.message })
        }
      }
     `,
     descriptionFive: `
      En este ejemplo, el controlador primero intenta obtener los datos de Redis usando redisClient.get('netsuite_classifications'). <br/><br/>
      Si encuentra un resultado en Redis (cache hit), lo devuelve directamente. <br/><br/>
      Si no encuentra un resultado (cache miss), realiza la consulta a la base de datos, guarda el resultado en Redis redisClient.set('netsuite_classifications', JSON.stringify(result)) y luego lo devuelve. <br/><br/>
      La segunda vez que se llame a este controlador, ya tendrá los datos en Redis y será mucho más rápido, devolviendo los resultados desde la caché redisClient.get('netsuite_classifications'). <br/><br/>
    `
  },
  {
    id: 25,
    idPlataform: FrameWorkAndLeguages.CloudWays,
    img: [id25img1],
    title: 'Configurar un servidor en CloudWays',
    description: `
      CloudWays es una plataforma de hosting que te permite desplegar aplicaciones, para aplicaciones Vue.js <br/>
      necesitamos una instancia PHP en el servidor de CloudWays, ya que CloudWays no tiene una opción específica para Node.js. <br/><br/>
      una vez que tienes tu servidor configurado con PHP, puedes usar SSH para conectarte a tu servidor y luego instalar Node.js manualmente. <br/><br/>
      Para instalar Node.js en tu servidor de CloudWays, puedes seguir estos pasos: <br/><br/>
      1. Conéctate a tu servidor usando SSH. Puedes usar un cliente SSH como PuTTY o la terminal de tu sistema operativo. <br/><br/>
      2. Una vez conectado, muevete a la carpeta applications con el siguiente comando cd applications <br/><br/>
      3. Luego navega a la carpeta de tu aplicación cd tu_carpeta_de_aplicacion <br/><br/>
      4. Ahora, dentro de la carpeta de tu aplicacion viaja a la carpeta public_html cd public_html <br/><br/>
      5. Ahora debes iniciar el servidor de tu aplicacion con el siguiente comando <br/><br/>
      pm2 start npm --name "Nombre de mi aplicacion" -- start <br/><br/>
      pm2 startup (para que inicie el servidor automaticamente) <br/><br/>
      pm2 save (para guardar la configuracion de pm2) <br/><br/>
      Con esto, tu aplicación Vue.js estará corriendo en tu servidor de CloudWays usando Node.js. <br/><br/>
      6. Una ves echo esto ya puedes hacer el primer deploy de tu aplicación a CloudWays, para eso puedes usar Git para subir tu código a un repositorio remoto (GitHub)  <br/><br/>
      7. Conectamos el servidor de CloudWays con tu repositorio de github, leemos la documentacion de CloudWays para conectar el repositorio con el servidor (ver la imagen uno en para encontrar los pasos) <br/><br/>
      8. una ves echo el pull en cloudways y creado ya el servidor, ya puedes hacer deploy de tu aplicación, desde la consala entrando en la carpeta public_html y ejecutando el comando <br/>
       npm run install una ves ejecutado segimos con npm run build para generar la carpeta dist con los archivos de producción<br/><br/>
      9. y para finalizar ejecutamos el comando pm2 list para ver la lista de aplicaciones que tenemos corriendo y hay podemos verificar el id de nuestra aplicacion <br/><br/>
      10. una ves que tengamos el id de la aplicacion ejecutamos el comando pm2 restar id para reiniciar el servidor y que tome los cambios de la nueva version de la aplicacion <br/><br/>
      se veria algo asi pm2 restart 0 (si el id de la aplicacion es 0) <br/><br/>
      Con esto, tu aplicación Vue.js estará desplegada y corriendo en tu servidor de CloudWays. <br/><br/>
      Recuerda que cada vez que hagas cambios en tu código, debes repetir los pasos 8, 9 y 10 para actualizar tu aplicación en el servidor.
     `

  },
  {
    id: 26,
    idPlataform: FrameWorkAndLeguages.CloudWays,
    title: 'ver las variables de entorno en CloudWays',
    description: `
      Para ver las variables de entorno en CloudWays, puedes seguir estos pasos: <br/><br/>
      1. conectate al servidor por ssh <br/><br/>
      2. entra en la carpeta applications cd applications <br/><br/>
      3. luego entra en la carpeta de tu aplicacion cd tu_carpeta_de_aplicacion <br/><br/>
      4. ahora viaja a la carpeta public_html cd public_html <br/><br/>
      5. ahora ejecuta el comando nano .env para abrir el archivo de variables de entorno y ver su contenido <br/><br/>
      6. si quieres editar las variables de entorno, puedes hacerlo directamente en este archivo .env y luego guardar los cambios <br/><br/>
      7. una ves que hayas editado el archivo de variables de entorno, debes reiniciar el servidor para que tome los cambios, para eso ejecuta el comando pm2 list para ver la lista de aplicaciones que tienes corriendo y verificar el id de tu aplicacion <br/><br/>
      8. luego ejecuta el comando pm2 restart id para reiniciar el servidor y que tome los cambios de las nuevas variables de entorno <br/><br/>
      `
  }
]