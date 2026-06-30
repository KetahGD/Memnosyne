# Memoria Viva - sitio estatico

Sitio HTML/CSS para presentar la red cultural entre Memnosyne Institute, el Centro Cultural Tolteca de Teotihuacan AC y el Centro Comunitario U Kuuchil K Ch'ilbalo'on.

## Estructura

- `index.html`: landing general.
- `fundacion-identidad.html`: fundacion e identidad translocal.
- `centro-tolteca.html`: Centro Cultural Tolteca.
- `centro-maya.html`: Centro Cultural Maya.
- `proyectos.html`: ejes de proyectos.
- `donativo.html`: apoyo y donativos.
- `styles.css`: estilos, variables, paletas y responsive.
- `palette.js`: paletas fijas por apartado.
- `section-creativity.css`: motivos visuales extra por seccion.
- `wireframe.css`: estilos historicos de maqueta conservados para referencia.
- `wireframe.js`: carga contenido basado en el informe y activa la vista final.
- `content-lab.css`: estilos para modulos extra de exploracion de contenido.
- `animations.css`: animaciones suaves, banner preparado para video y estados interactivos.
- `interactions.js`: tarjetas expandibles, filtros, linea del tiempo, scroll reveal y modulos de organizacion por apartado.
- `VERSION.json`: version actual.
- `CHANGELOG.md`: historial de cambios y zips asociados.
- `version.js`: indicador visible de version.
- `SUGERENCIAS_INTERACCION.md`: ideas de interaccion para futuras iteraciones.
- `assets/`: imagenes locales usadas en Inicio.

## Version

La version actual es `v1.2.7`. El indicador visible se genera desde `version.js` y el registro formal vive en `VERSION.json` y `CHANGELOG.md`.

Cada cambio nuevo debe:

- incrementar la version;
- actualizar `VERSION.json`, `CHANGELOG.md` y `version.js`;
- generar un ZIP con la version en el nombre.

## Paletas

La interfaz usa paletas por apartado. Solo `Proyectos` usa Frog:

- Inicio / Hero: `Sol Obsidiana`.
- Fundacion: `Fuego Ritual`.
- Tolteca: `Piedra Roja`.
- Maya: `Tlashko Verde`.
- Proyectos: Frog `#17876D`, RGB `23 135 109`, CMYK `84 25 67 8`.
- Donativo: `Semilla Dorada` en modo Original; `Semilla Dorada + Indigo Textil` en modo Intenso.
- Footer: `Sol Obsidiana`.

Para ajustar estos valores, edita `palette.js`.

La interfaz incluye un control `Modo`:

- `Original`: conserva las paletas base.
- `Intenso`: aumenta saturacion y brillo sin cambiar la familia cromatica.

## Distribucion

El sitio volvio a la distribucion base anterior: hero superior, secciones en recorrido vertical, grids responsivos para tarjetas, bloques visuales marcados y footer consistente.

## Interaccion ligera

La version `v1.2.2` mantiene HTML, CSS y JavaScript ligero. Incluye:

- banner preparado para sustituirse por un video loop con capa de color;
- tarjetas expandibles para mostrar imagen, contexto y contenido adicional;
- filtros visuales por eje en `Proyectos`;
- linea del tiempo interactiva por apartado;
- recomendaciones de navegacion entre secciones;
- scroll reveal con `IntersectionObserver`;
- barra de progreso de scroll;
- brujula de Inicio, red de Fundacion, cancha Tolteca, tejido Maya, matriz de Proyectos y escalera de Donativo;
- modulo de recomendacion de pagos en `Donativo`.

## Contenido de previsualizacion

La version `v1.2.7` mantiene los datos del informe y presenta el Inicio con la imagen ceremonial correcta, sin rotulos visibles de wireframe ni superposiciones en los controles flotantes:

- Inicio: red translocal y narrativa "dos territorios, una red viva".
- Fundacion: Memnosyne, Tolteca y U Kuuchil como ecosistema conectado.
- Tolteca: Teotihuacan, Tlashko, ceremonias, museo y recorridos.
- Maya: buen vivir, Escuelita Maya, herbolaria, Reflejos y memoria comunitaria.
- Proyectos: educacion, salud, arte, territorio y alianzas.
- Donativo: transparencia, checkout externo recomendado y datos por validar.

Las imagenes siguen siendo recursos de visualizacion/propuesta. Las metricas financieras, cifras de impacto y fotografias finales deben validarse con el cliente.

## Modulos de contenido

Cada pagina incluye un bloque adicional de exploracion para probar formas de insertar informacion. Los acomodos estan ordenados en tarjetas limpias y cada apartado propone tres ideas:

- Inicio: bifurcacion territorial, directorio de acceso y lectura en tres capas.
- Fundacion: mapa de ecosistema, ficha de confianza y principios visuales.
- Tolteca: anillo ceremonial, recorrido patrimonial y archivo de objetos/practicas.
- Maya: reticula tipo tejido, memoria oral y palapa de programas.
- Proyectos: matriz de ejes, tira de alianzas y galeria de evidencias.
- Donativo: escalera de impacto, transparencia y CTA emocional.

Estos modulos pueden duplicarse, quitarse o adaptarse por seccion cuando se defina el contenido final.

La creatividad visual por seccion vive en `section-creativity.css`: patrones, motivos, overlays y detalles de tarjetas.

## Tipografias

Se cargan desde Google Fonts:

- Titulos: Cinzel, Cormorant Garamond, EB Garamond.
- Navegacion y botones: Montserrat, Poppins.
- Texto: Lora, Libre Baskerville.

## Como abrir

Abre `index.html` directamente en el navegador. No requiere servidor ni framework.

## Vista final

El sitio esta actualmente en previsualizacion final. Conserva las paletas, estructura, animaciones y contenido del informe, pero ya no muestra etiquetas tecnicas de maqueta ni rotulos de wireframe.

## Contenido

Para modificar textos, imagenes o enlaces, edita cada archivo HTML. Para mantener consistencia, conserva el mismo navbar, footer y el script `palette.js` en todas las paginas.



