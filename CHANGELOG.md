# Changelog

## v1.2.6 - 2026-06-29

Imagenes principales en Inicio.

- Agrega las imagenes proporcionadas como assets locales dentro de `assets/`.
- Usa la imagen de danza ceremonial como fondo principal del hero de Inicio.
- Agrega una franja visual inmediatamente despues del hero con danza y retrato ceremonial.
- Mantiene la brujula de red, rutas de navegacion, paletas y correcciones visuales de `v1.2.5`.
- Genera un nuevo ZIP con los assets incluidos.

Archivo comprimido asociado:

- `centro_cultural_v1.2.6_inicio_visual.zip`
## v1.2.5 - 2026-06-29

Correccion de bugs visuales.

- Corrige el organigrama de Fundacion: las lineas quedan detras de las tarjetas y con menor interferencia visual.
- Compacta el panel flotante de paleta para que no tape tablas, modulos ni contenido principal.
- Reubica el indicador de version en una esquina menos invasiva.
- Ajusta la tabla comparativa para mejorar cortes de texto, ancho minimo y scroll horizontal seguro.
- Limpia textos con codificacion visible y valida sintaxis de JavaScript.

Archivo comprimido asociado:

- `centro_cultural_v1.2.5_ajustes_visuales.zip`
## v1.2.4 - 2026-06-29

Vista final sin rotulos de wireframe.

- Mantiene paletas, contenido del informe, control `Original` / `Intenso`, animaciones y versionado.
- Deja de activar `wireframe-mode` y usa una previsualizacion final.
- Retira etiquetas visibles de maqueta: laboratorio, layout, imagen sugerida, aviso flotante y texto de espacio reservado.
- Cambia bordes punteados de modulos y tarjetas por una interfaz mas limpia con bordes solidos y sombras suaves.
- Limpia el HTML base para que no conserve encabezados tecnicos si se abre sin JavaScript.

Archivo comprimido asociado:

- `centro_cultural_v1.2.4_vista_final.zip`
## v1.2.3 - 2026-06-29

Wireframe con contenido del informe.

- Mantiene paletas, marca, modo wireframe, control `Original` / `Intenso`, animaciones y organizaciones visuales de `v1.2.2`.
- Reemplaza placeholders contenido de muestra por datos del informe analitico.
- Llena Inicio, Fundacion, Tolteca, Maya, Proyectos y Donativo con textos relevantes.
- Ajusta los modulos interactivos para mostrar contenido realista: red translocal, Tlashko, Escuelita Maya, Reflejos, herbolaria, alianzas y transparencia.
- Permite ver imagenes de fondo en heroes y bloques visuales aun dentro del modo wireframe.
- Conserva avisos de validacion para metricas financieras, impacto y donativo.

Archivo comprimido asociado:

- `centro_cultural_v1.2.3_contenido_informe.zip`

## v1.2.2 - 2026-06-29

Organizacion y animacion por apartado sobre la base `v1.2.1`.

- Restaura la base `v1.2.1` antes de aplicar cambios.
- Mantiene paletas, marca, modo wireframe, control `Original` / `Intenso`, filtros, timeline y tarjetas expandibles.
- Agrega `IntersectionObserver` para reveal al entrar en viewport.
- Agrega barra de progreso de scroll.
- Inicio: agrega brujula de red y entrada diferenciada de ruta.
- Fundacion: agrega organigrama/ecosistema y tabla comparativa placeholder.
- Tolteca: agrega layout tipo cancha Tlashko y anillo ceremonial.
- Maya: agrega reticula tipo tejido y palapa de programas.
- Proyectos: agrega matriz de ejes y tira horizontal de alianzas.
- Donativo: agrega flujo de apoyo, selector de monto, medidor y escalera de impacto con count-up placeholder.

Archivo comprimido asociado:

- `centro_cultural_v1.2.2_animacion_apartados.zip`

## v1.2.1 - 2026-06-28

Paleta ajustada para Donativo.

- Mantiene estructura, modo wireframe, animaciones, tarjetas expandibles, filtros, linea del tiempo y navegacion recomendada de `v1.2.0`.
- Cambia `Donativo` en modo `Original` a `Semilla Dorada`.
- Cambia `Donativo` en modo `Intenso` a la combinacion global: hueso / maiz / arena, terracota, rojo ritual, naranja, verde Frog / ceiba, `#355070` Indigo Textil y `#D8E2EC` apoyo suave.
- Mantiene Inicio, Fundacion, Tolteca, Maya, Proyectos y Footer con sus paletas ya establecidas.

Archivo comprimido asociado:

- `centro_cultural_v1.2.1_donativo_semilla_dorada.zip`

## v1.2.0 - 2026-06-28

Wireframe interactivo con animaciones.

- Mantiene estructura actual, modo wireframe y paletas vigentes por apartado.
- Agrega `animations.css` para transiciones suaves, entrada de bloques y soporte visual de banner con video de fondo.
- Agrega `interactions.js` para tarjetas expandibles, linea del tiempo interactiva y navegacion recomendada.
- Agrega filtros visuales por eje en `Proyectos`.
- Agrega modulo placeholder de recomendacion para pagos en `Donativo`.
- Mantiene control `Original` / `Intenso`.

Archivo comprimido asociado:

- `centro_cultural_v1.2.0_interacciones_wireframe.zip`

## v1.1.1 - 2026-06-28

Correccion de alcance cromatico.

- Aplica Frog `#17876D` solamente al apartado Proyectos.
- Restaura Inicio / Hero a `Sol Obsidiana`.
- Restaura Fundacion y Donativo a `Fuego Ritual`.
- Restaura Tolteca a `Piedra Roja`.
- Restaura Maya a `Tlashko Verde`.
- Mantiene Footer en `Sol Obsidiana`.
- Mantiene modo `Original` / `Intenso`.

Archivo comprimido asociado:

- `centro_cultural_v1.1.1_frog_solo_proyectos.zip`

## v1.1.0 - 2026-06-28

Actualizacion cromatica solicitada.

- Aplica Frog `#17876D` como color dominante de la interfaz.
- Conserva modo `Original` / `Intenso`.
- Mantiene estructura wireframe actual y laboratorios de contenido.
- Actualiza indicador visible de version a `v1.1.0`.
- Mantiene politica de entregar un ZIP por cada cambio.

Archivo comprimido asociado:

- `centro_cultural_v1.1.0_frog_wireframe.zip`

## v1.0.0 - 2026-06-28

Version formal inicial para control de entregables.

- Agrega `VERSION.json` como fuente de version actual.
- Agrega indicador visible de version en la interfaz.
- Mantiene wireframe, placeholders y laboratorios por seccion.
- Mantiene paletas fijas por apartado:
  - Inicio / Hero: Sol Obsidiana.
  - Fundacion: Fuego Ritual.
  - Tolteca: Piedra Roja.
  - Maya: Tlashko Verde.
  - Proyectos: Maiz Ceremonial.
  - Donativo: Fuego Ritual.
  - Footer: Sol Obsidiana.
- Mantiene modo `Original` / `Intenso`.
- Registra color Frog como referencia: `#17876D`, RGB `23 135 109`, CMYK `84 25 67 8`.

Archivo comprimido asociado:

- `centro_cultural_v1.0.0_wireframe_paletas_por_apartado.zip`

## Politica de versionado

- Cada cambio nuevo debe incrementar la version.
- Cada entrega debe generar un ZIP con el numero de version en el nombre.
- Para volver a una version anterior, usar el ZIP correspondiente.




