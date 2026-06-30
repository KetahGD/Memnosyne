# Documentacion del proyecto: Memnosyne Mexico

Version del documento: v1.2.13  
Fecha: 2026-06-30

## 1. Objetivo

Este documento resume la evolucion del sitio web estatico **Memnosyne Mexico**. La documentacion se centra en la parte interactiva, creativa y visual del proyecto: layout, versiones, recursos, imagenes, tipografias, estructura de carpetas y proceso de trabajo.

La pagina busca presentar una red cultural entre Memnosyne Institute, el Centro Cultural Tolteca de Teotihuacan AC y el Centro Comunitario U Kuuchil K Ch'ilbalo'on. Para esta etapa, el enfoque ya no es documentar todo el contenido informativo, sino explicar como se construyo la experiencia visual e interactiva.

## 2. Alcance actual del sitio

El sitio esta desarrollado con **HTML, CSS y JavaScript ligero**. No usa framework, backend ni base de datos.

La version actual incluye:

- Pagina principal con nombre **Memnosyne Mexico**.
- Subpaginas: Fundacion, Tolteca, Maya, Proyectos y Donativo.
- Modo `Vista final` con textos e imagenes.
- Modo `Wireframe` para revisar estructura, espacios visuales y acomodo.
- Animaciones suaves, tarjetas expandibles, filtros por eje, linea del tiempo y recomendaciones de navegacion.
- Paletas fijas por apartado sin selector cromatico visible.
- Diseno responsive para escritorio y movil.

## 3. Layout general

El layout trabajado mantiene una estructura clara y repetible:

1. **Navbar fijo/superior**  
   Contiene la marca `Memnosyne Mexico`, navegacion por secciones y boton de donativo.

2. **Hero principal por pagina**  
   Usa imagen, color de seccion, titulo editorial y texto breve.

3. **Bloques de contenido visual**  
   Secciones con tarjetas, imagenes documentales, timelines, matrices o grids.

4. **Modulo interactivo**  
   Cada seccion integra recursos de exploracion: tarjetas expandibles, filtros, lineas de tiempo, matriz de ejes o escalera de impacto.

5. **Selector de vista**  
   Boton flotante `Vista final / Wireframe` para alternar entre pagina final y maqueta.

6. **Footer**  
   Resume la red cultural, territorios, secciones y canales.

## 4. Evolucion de versiones

Estas son las versiones y entregables comprimidos encontrados dentro del proyecto:

| Version / archivo | Enfoque principal |
|---|---|
| `centro_cultural_wireframe_paletas.zip` | Primera exploracion de wireframe con paletas. |
| `centro_cultural_wireframe_layouts.zip` | Exploracion de layouts alternativos por seccion. |
| `centro_cultural_wireframe_distribucion_anterior.zip` | Regreso a una distribucion previa mas ordenada. |
| `centro_cultural_wireframe_ideas_contextuales.zip` | Ideas de organizacion por contexto y cultura. |
| `centro_cultural_wireframe_paletas_por_apartado.zip` | Paletas asignadas por apartado. |
| `centro_cultural_wireframe_paletas_brand_ordenado.zip` | Integracion de paletas de marca con mejor orden visual. |
| `centro_cultural_v1.1.0_frog_wireframe.zip` | Prueba de color Frog en wireframe. |
| `centro_cultural_v1.1.1_frog_solo_proyectos.zip` | Ajuste para aplicar Frog solo en Proyectos. |
| `centro_cultural_v1.2.0_interacciones_wireframe.zip` | Animaciones, filtros, tarjetas expandibles y timeline. |
| `centro_cultural_v1.2.1_donativo_semilla_dorada.zip` | Donativo con paleta Semilla Dorada. |
| `centro_cultural_v1.2.2_animacion_apartados.zip` | Mejora de animaciones y presentacion por seccion. |
| `centro_cultural_v1.2.3_contenido_informe.zip` | Integracion de contenido basado en el informe. |
| `centro_cultural_v1.2.4_vista_final.zip` | Retiro de rotulos de wireframe para vista mas finalizada. |
| `centro_cultural_v1.2.5_ajustes_visuales.zip` | Correccion de bugs visuales y controles flotantes. |
| `centro_cultural_v1.2.6_inicio_visual.zip` | Imagenes principales en Inicio. |
| `centro_cultural_v1.2.7_inicio_imagen_correcta.zip` | Reemplazo de imagen principal de Inicio. |
| `centro_cultural_v1.2.8_fundacion_imagenes.zip` | Imagenes visibles tambien en Fundacion. |
| `centro_cultural_v1.2.9_imagenes_por_seccion.zip` | Imagenes integradas en Tolteca, Maya y Donativo. |
| `centro_cultural_v1.2.10_proyectos_imagen_visible.zip` | Imagen visible y corregida en Proyectos. |
| `centro_cultural_v1.2.11_responsive_vistas.zip` | Responsive y selector unico Vista final / Wireframe. |
| `centro_cultural_v1.2.12_memnosyne_mexico.zip` | Cambio de nombre del sitio a Memnosyne Mexico. |
| `centro_cultural_v1.2.13_documentacion_proyecto.zip` | Documentacion del proceso, layout, versiones, recursos y roles. |
| `centro_cultural_v1.3.0_selector_chat_cloud.zip` | Version extra experimental con selector de ideas Chat / Cloud. |

## 5. Recursos visuales utilizados

### Imagenes finales en `assets/`

| Archivo | Uso sugerido |
|---|---|
| `inicio-danza-tolteca.jpeg` | Hero e introduccion visual del inicio/fundacion. |
| `inicio-retrato-maya.jpeg` | Imagen de memoria viva y retrato ceremonial. |
| `tolteca-hero-danza.png` | Hero de Centro Cultural Tolteca. |
| `tolteca-patrimonio-vivo.png` | Bloque de patrimonio, piedra, sol y Tlashko. |
| `maya-hero-danza.png` | Hero de Centro Cultural Maya. |
| `maya-saberes-ancestrales.jpeg` | Bloque de buen vivir y saberes ancestrales. |
| `proyectos-hero-comunidad.png` | Hero y recurso visual de Proyectos. |
| `donativo-hero-memoria.png` | Hero de Donativo. |
| `donativo-apoyo-comunitario.png` | Bloque visual de apoyo comunitario. |

### Carpeta `Imagenes/`

Contiene fotografias/capturas de proceso recibidas durante el desarrollo. Sirven como respaldo visual para ver como fue cambiando el diseno y como se fueron integrando imagenes por seccion.

## 6. Tipografias

Las tipografias se cargan desde Google Fonts:

- **Cinzel / Cinzel Decorative**: titulos principales y presencia editorial.
- **Cormorant Garamond / EB Garamond**: tono cultural, institucional y ceremonial.
- **Lora / Libre Baskerville**: lectura de parrafos.
- **Montserrat / Poppins**: navegacion, botones, etiquetas y controles.

## 7. Iconos y elementos graficos

No se uso una libreria externa de iconos. Los iconos actuales son recursos tipograficos simples dentro de tarjetas, por ejemplo:

- `EDU` para educacion.
- `SAL` para salud.
- `ART` para arte.
- `MEM` para memoria.
- `PAT` para patrimonio.
- `RED` para alianzas.

Tambien se usaron patrones CSS, overlays, tarjetas, divisores, gradientes, bordes y placeholders para construir una identidad visual sin depender de iconos externos.

## 8. Estructura de carpetas y archivos

Archivos principales:

- `index.html`: inicio del sitio.
- `fundacion-identidad.html`: fundacion e identidad.
- `centro-tolteca.html`: apartado Tolteca.
- `centro-maya.html`: apartado Maya.
- `proyectos.html`: ejes y proyectos.
- `donativo.html`: apoyo y donativos.
- `styles.css`: base visual, paletas, layout general y responsive.
- `animations.css`: animaciones, responsive extra y selector de vista.
- `section-creativity.css`: detalles visuales por seccion.
- `content-lab.css`: modulos exploratorios.
- `wireframe.css`: estilos de modo wireframe.
- `palette.js`: paletas fijas por apartado.
- `wireframe.js`: textos dinamicos, vista final y estructura de contenido.
- `interactions.js`: interacciones, filtros, timeline y tarjetas.
- `version.js`: control `Vista final / Wireframe` y version visible internamente.
- `assets/`: imagenes finales usadas por el sitio.
- `Imagenes/`: imagenes y capturas de proceso.
- `CHANGELOG.md`: historial de versiones.
- `VERSION.json`: version vigente.

## 9. Interactividad y creatividad documentada

Las funciones creativas mas importantes son:

- Selector `Vista final / Wireframe`.
- Tarjetas expandibles.
- Filtros visuales por eje en Proyectos.
- Linea del tiempo interactiva por apartado.
- Navegacion recomendada entre secciones.
- Modulos por contexto: brujula, red, cancha, tejido, matriz y escalera de impacto.
- Animaciones suaves de aparicion y transicion.
- Layout responsive para que las matrices y grids no se desborden en movil.

## 10. Trabajo por integrante

### Integrante 1: diseno, investigacion, interfaz y documentacion

Responsabilidades:

- Investigacion visual y cultural.
- Referencias de paletas, imagenes y estilo.
- Definicion de layout y jerarquia visual.
- Revision de interfaz y experiencia de usuario.
- Documentacion del proceso y recursos usados.

### Integrante 2: programacion, integracion y pruebas

Responsabilidades:

- Estructura HTML, CSS y JavaScript.
- Integracion de imagenes, animaciones e interacciones.
- Versionado del proyecto.
- Generacion de archivos ZIP por version.
- Pruebas responsive y correccion de errores visuales.
- Publicacion y sincronizacion con GitHub.

## 11. Hosting, dominio y operacion

### Hosting

El hosting es el servicio donde se publicara el sitio para que pueda visitarse en internet. Como el proyecto es estatico, puede publicarse en servicios como GitHub Pages, Netlify, Vercel o cualquier hosting que acepte HTML, CSS y JS.

### Dominio

El dominio es la direccion web final del sitio. Ejemplo:

- `memnosynemexico.org`
- `memnosynemexico.mx`
- `memnosyne-mexico.org`

La decision final depende de disponibilidad y compra del dominio.

### Mantenimiento

Incluye:

- Correccion de errores visuales.
- Actualizaciones de contenido.
- Respaldo de archivos y versiones.
- Revision de enlaces, imagenes y compatibilidad responsive.
- Generacion de nuevas versiones cuando haya cambios.

### Administracion

Incluye:

- Gestion del contenido publicado.
- Supervision de funcionamiento.
- Revision de imagenes, textos y botones.
- Coordinacion de futuras actualizaciones.

## 12. Versionamiento con Git y GitHub

El proyecto usa Git y GitHub para conservar historial de cambios.

Se recomienda continuar con una estructura simple:

- `v1.0`: primera entrega funcional.
- `v1.1`: correccion de errores y ajustes visuales.
- `v1.2`: mejoras de interaccion, contenido, imagenes y responsive.
- `v1.3`: pruebas o propuestas experimentales.

Cada cambio importante debe incluir:

- Actualizacion de `VERSION.json`.
- Entrada en `CHANGELOG.md`.
- ZIP con el numero de version.
- Commit en GitHub con mensaje claro.

## 13. Resumen final

Memnosyne Mexico evoluciono de un wireframe con exploracion de paletas a una pagina visual, responsive e interactiva. El proyecto conserva versiones comprimidas, assets locales, imagenes de proceso, documentacion de recursos y versionado en GitHub.

La version actual prioriza una presentacion limpia: una vista final con imagenes y datos, y una vista wireframe para revisar la estructura sin distraerse con el contenido final.
