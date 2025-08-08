//id = 2
import id2img1 from "@/assets/img/imgDB/netsuite/id2Img1.png"
import id2img2 from "@/assets/img/imgDB/netsuite/id2Img2.png"
import id2img3 from "@/assets/img/imgDB/netsuite/id2Img3.png"
import id2img4 from "@/assets/img/imgDB/netsuite/id2Img4.png"
import id7img1 from "@/assets/img/imgDB/node/lineasTiempo.png"

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
  },
  {
    id: 6,
    idPlataform: 10,
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
    idPlataform: 4,
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
    idPlataform: 14,
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
    idPlataform: 10,
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
    idPlataform: 16,
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


  }
]