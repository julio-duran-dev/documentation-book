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

  }
]