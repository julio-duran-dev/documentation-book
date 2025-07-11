export const TechnicalAreaData = [
  {
    id: 1,
    idPlataform: 1,
    textOne: `
    🧩¿Qué ventaja principal ofrece el uso de script setup en componentes de Vue 3? <br/><br/>

    A. Mejora la compatibilidad con Vue 2 <br/>
    B. Permite declarar propiedades globales <br/>
    C. Reduce el código repetitivo y mejora la legibilidad <br/>
    D. Es obligatorio para usar TypeScript <br/><br/><br/>

    🧩¿Cómo defines una propiedad en script setup? <br/><br/>

    A. defineComponent({ props: [...] }) <br/>
    B. defineProps() <br/>
    C. useProps() <br/>
    D. import { props } from 'vue' <br/><br/><br/>

    🧩En script setup, ¿cómo defines una variable reactiva? <br/><br/>

    A. let count = 0 <br/>
    B. const count = ref(0) <br/>
    C. data() { return { count: 0 } } <br/>
    D. useState(count) <br/><br/><br/>

    🧩¿Qué hace la función defineEmits() en script setup? <br/><br/>

    A. Define los datos que puede recibir el componente <br/>
    B. Emite un evento personalizado desde el componente <br/>
    C. Importa funciones externas <br/>
    D. Define las rutas del componente <br/>
    `,
    respOne: `
    
    💡¿Qué ventaja principal ofrece script setup? <br/><br/>

    Respuesta correcta: ✅ C. Reduce el código repetitivo y mejora la legibilidad <br/><br/>

    Explicación: <br/>
    script setup es una sintaxis nueva en Vue 3 que permite escribir componentes de forma más concisa y <br/>
    limpia, eliminando la necesidad de return, setup() explícito, y otras estructuras repetitivas.<br/><br/><br/>
        
    💡¿Cómo defines una propiedad en script setup? <br/><br/>

    Respuesta correcta: ✅ B. defineProps() <br/><br/>

    Explicación: <br/>
    Para declarar props en un componente con script setup, se usa: <br/><br/>
      
    const props = defineProps<{ title: string }>(); <br/><br/><br/>

    💡¿Cómo defines una variable reactiva? <br/><br/>

    Respuesta correcta: ✅ B. const count = ref(0)

    Explicación: <br/>
    Con ref() haces que una variable sea reactiva en Vue 3. <br/><br/><br/>

    💡¿Qué hace defineEmits()? <br/><br/>

    Respuesta correcta: ✅ B. Emite un evento personalizado desde el componente <br/><br/>

    Explicación: <br/>
    Sirve para declarar los eventos que tu componente puede emitir: <br/> <br/>

    const emit = defineEmits<{ <br/>
      (e: 'submit', data: string): void <br/>
    }>() <br/>
    `,
    textTwo: `
      
      🧩¿Cuál es la forma correcta de escuchar un cambio en una prop o variable reactiva dentro de script setup? <br/><br/>

      A. watchEffect(() => props.value) <br/>
      B. onChange(() => {...}) <br/>
      C. useWatch(props) <br/>
      D. watch(() => props.valor, (nuevo, viejo) => {...}) <br/><br/><br/>

      
      🧩¿Dónde puedes usar directamente variables reactivas y props sin necesidad de return o setup()? <br/><br/>

      A. Solo dentro de la función setup() <br/>
      B. Dentro de template> cuando usas script> normal <br/>
      C. Dentro del template> cuando usas script setup <br/>
      D. Solo fuera del componente <br/><br/><br/>

      
      🧩¿Cómo defines una función que se puede usar en el template>? <br/><br/>

      A. No se puede usar funciones dentro del template <br/>
      B. Definiéndola dentro de setup() y retornándola manualmente <br/>
      C. Simplemente definiéndola en script setup como una función <br/>
      D. Solo usando methods en la opción API <br/><br/><br/>

      
      🧩¿Qué hace el modificador .sync en Vue 3? <br/><br/>

      A. Sincroniza un estado con el servidor <br/>
      B. Permite a un componente hijo modificar directamente una prop <br/>
      C. Reemplaza a v-model <br/>
      D. No existe en Vue 3 con Composition API <br/>
    `,
    respTwo: `
    💡¿Cómo escuchar un cambio en una prop o variable reactiva? <br/>
      Respuesta correcta: ✅ D. watch(() => props.valor, (nuevo, viejo) => {...}) <br/> <br/>

      Explicación: <br/>
      watch se usa para reaccionar a cambios en valores reactivos o props <br/><br/><br/>

    💡¿Dónde puedes usar variables reactivas sin setup()? <br/>
      Respuesta correcta: ✅ C. Dentro del template> cuando usas script setup <br/> <br/>

      Explicación: <br/>
      Una gran ventaja de script setup es que cualquier variable/reactividad declarada  <br/>
      está automáticamente disponible en el template>, sin necesidad de return. <br/><br/><br/>

    💡¿Cómo defines una función para usar en el template? <br/>
      Respuesta correcta: ✅ C. Simplemente definiéndola en script setup como una función <br/><br/>

      Explicación: <br/>
      Ejemplo: <br/><br/>

      function saludar() { <br/>
        return 'Hola Vue!'; <br/>
      } <br/><br/>

      Y puedes usar {{ saludar() }} directamente en el template. <br/><br/><br/>

    💡¿Qué hace el modificador .sync en Vue 3? <br/>
      Respuesta correcta: ✅ B. Permite a un componente hijo modificar directamente una prop <br/><br/>

      Explicación: <br/>
      .sync es una forma de hacer two-way binding con props en Vue 2 y también se mantiene en Vue 3, <br/>
       aunque ahora es más común usar v-model con nombres personalizados. <br/>

    `
  }
]