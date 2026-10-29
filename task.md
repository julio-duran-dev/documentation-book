Necesitamos agregar un nuevo post al sistema relacionado con Supabase.

Primero, revisa cómo están implementados actualmente los posts existentes para seguir exactamente la misma estructura y evitar modificar innecesariamente el funcionamiento actual.

### Archivos relevantes

* `categoris.ts`

  * Aquí se encuentran definidas las categorías disponibles en el sistema.
  * Debemos agregar una nueva categoría relacionada con este nuevo post, siguiendo exactamente el formato utilizado por las categorías existentes.

* `platformInfo.ts`

  * Aquí se encuentra la información y configuración de los posts.
  * Debemos agregar el nuevo post siguiendo exactamente la estructura de los posts existentes.

* `homeCodigo.vue`

  * Aquí se muestran/reflejan las categorías en la interfaz.
  * Verifica si es necesario realizar algún cambio para que la nueva categoría aparezca correctamente.
  * Si el sistema ya obtiene las categorías dinámicamente desde `categoris.ts`, no hagas cambios innecesarios.

### Nuevo post

El nuevo post debe tener la siguiente información:

**Título:**
`Incriptar un dato encriptado en supabase mediante sql editor`


**Descripción:**


**Código:**

```sql
UPDATE public.users
SET pin = extensions.crypt('1234', extensions.gen_salt('bf'))
WHERE id = 5;
```

### Requisitos importantes

1. Revisa primero `categoris.ts`, `platformInfo.ts` y `homeCodigo.vue`.
2. Analiza cómo están estructurados los posts existentes y utiliza exactamente el mismo patrón.
3. Agrega la nueva categoría en `categoris.ts` siguiendo el formato actual.
4. Agrega el nuevo post en `platformInfo.ts`.
5. Utiliza correctamente la imagen ubicada en:
   `src\assets\img\imgDB\supabase\supabase_restPasword.png`
6. Verifica si `homeCodigo.vue` requiere alguna modificación para mostrar la nueva categoría. Si no es necesario, no lo modifiques.
7. No cambies ni rompas el comportamiento de los posts existentes.
8. Mantén el mismo formato, nombres de propiedades, estructura y convenciones que utiliza actualmente el proyecto.
9. Al finalizar, verifica que:

   * La nueva categoría aparezca correctamente.
   * El nuevo post aparezca dentro de la categoría correspondiente.
   * El título, descripción, imagen y código se rendericen correctamente.
   * Los posts existentes continúen funcionando exactamente igual.

### Importante

Antes de realizar los cambios, inspecciona el código existente para determinar exactamente cómo se agregan los posts y categorías actualmente. No inventes una estructura nueva; reutiliza el patrón ya implementado en el proyecto.
