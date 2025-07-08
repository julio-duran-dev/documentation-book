<template>
  <pre><code :class="`language-${language}`" ref="codeRef">{{ code }}</code></pre>
</template>

<script setup lang="ts">
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

// Opcional: vuelve a resaltar si el código cambia
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
