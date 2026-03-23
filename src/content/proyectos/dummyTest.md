---
title: "Proyecto de prueba (no real)"
description: "Se remodeló una casa personal en zacatecoluca y se adaptó para ser un espacio rentable y asequible para renta de consultorios médicos."
image: "../../assets/projects/dummyProject.jpg"
duration: "6 Meses"
location: "Zacatecoluca"
publishedAt: null
---

# Heading 1 — Título Principal

## Heading 2 — Detalles del proyecto

### Heading 3 — Subsección Innovación

#### Heading 4 — Detalle menor

---

## Párrafos y texto inline

El punto de partida fue una vivienda unifamiliar de construcción tradicional que presentaba una distribución compartimentada y obsoleta para fines comerciales. El reto principal consistió en realizar una **reingeniería estructural** para maximizar los metros cuadrados útiles.

Se optó por una estética _contemporánea_ que rompe con el entorno residencial clásico. Combinando **negrita** con _cursiva_ y hasta **_ambas a la vez_** para enfatizar puntos críticos del proyecto.

Este párrafo contiene un [enlace externo a Google](https://google.com) y un [enlace interno](/proyectos) para probar los estilos de anchor en contexto de prosa normal.

---

## Listas

### Lista desordenada

- Paneles de fibrocemento para acabado industrial
- Ventanales de control térmico para maximizar luz natural
- Acabados en madera tratada para aportar calidez
- Sistemas de climatización de alta eficiencia

### Lista ordenada

1. Diagnóstico estructural del inmueble
2. Diseño arquitectónico y planos
3. Gestión de permisos municipales
4. Ejecución de obra civil
5. Acabados e instalaciones especiales

### Lista anidada

- Fase de diseño
  - Anteproyecto
  - Planos ejecutivos
  - Render 3D
- Fase de construcción
  - Demolición parcial
  - Estructura
    - Columnas
    - Vigas
  - Instalaciones
- Fase de entrega

---

## Blockquote

> "La intervención no solo transformó la estética del inmueble, sino que optimizó su rentabilidad al convertir una propiedad de bajo uso en un activo de alto rendimiento."

> Este es un blockquote de varias líneas para probar cómo se comporta el borde izquierdo y el espaciado cuando el texto es más extenso y ocupa más de una línea en el viewport.

---

## Código

Puedes usar la variable `font-size: 0.875rem` directamente en el selector, o también `border-radius: 4px` para suavizar bordes.

Bloque de código completo:

```css
section :global(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

section :global(p) {
  font-size: 0.875rem;
  line-height: 1.6;
}
```

```js
const projects = await getCollection("projects");
const latest = projects.sort((a, b) => b.data.date - a.data.date)[0];
```

---

## Tabla

| Material          | Uso                 | Beneficio                         |
| ----------------- | ------------------- | --------------------------------- |
| Fibrocemento      | Fachada exterior    | Bajo mantenimiento                |
| Vidrio térmico    | Ventanales          | Control solar y luz natural       |
| Madera tratada    | Acabados interiores | Calidez y confort visual          |
| Concreto expuesto | Estructura y muros  | Resistencia y estética industrial |

---

## Imagen

![Fachada del complejo médico](https://placehold.co/800x400)

---

## Separador horizontal final

Todo lo anterior cubre: h1–h4, párrafos, bold, italic, links, listas simples, ordenadas y anidadas, blockquotes, código inline, bloques de código, tablas e imágenes.

---

_Fin del documento de prueba._
