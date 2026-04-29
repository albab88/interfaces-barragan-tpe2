
# 🎨 Web Drawing Tool

Una aplicación interactiva orientada al procesamiento digital de imágenes y dibujo a mano alzada. El sistema permite la creación de lienzo desde cero o la edición de archivos externos mediante una interfaz intuitiva y funcional.

---

## 🖌️ Herramientas de Dibujo
La aplicación cuenta con un motor de dibujo dinámico con:
* **Lápiz y Goma**: Herramientas con gestión de parámetros ajustables.
* **Personalización**: Posibilidad de modificar el grosor y el color del trazo del lápiz mediante un selector cromático.

## 📷 Procesamiento de Imágenes y Filtros
Permite la carga de imágenes locales para su manipulación en tiempo real con los siguientes filtros:

* **Brillo**
* **Saturación**
* **Escala de grises**
* **Binarización**
* **Sepia**
* **Negativo**
* **Filtros de color RGB**
* **Blur**
* **Detección de Bordes**
* **Resaltar Detalles**

> **Nota**: El sistema incluye un **Historial de Filtros** que permite revertir las acciones de procesamiento por una cantidad limitada de veces

## 💾 Gestión de Archivos
* **Carga**: Importación de archivos de imagen compatibles desde el sistema de archivos del usuario.
* **Guardado**: Exportación del resultado final en formato `.png`. La aplicación permite asignar un nombre personalizado al archivo, el cual se descarga automáticamente en el directorio local del usuario.

---

## 📚 Referencias y Recursos
Para el desarrollo y la implementación de los algoritmos de procesamiento de imágenes, se consultaron las siguientes fuentes técnicas y librerías de referencia:

* **Manipulación de Píxeles**: [CSS-Tricks - Manipulating Pixels using Canvas](https://css-tricks.com/manipulating-pixels-using-canvas/) y [MDN Web Docs - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
* **Algoritmos de Filtrado**: [Basic Image Manipulation](https://www.codingame.com/playgrounds/2524/basic-image-manipulation/filtering) e [Img.ly - How to apply filters in JS](https://img.ly/blog/how-to-apply-filters-in-javascript/).
* **Operadores de Convolución y Sobel**: [Observable - Sobel Operator](https://observablehq.com/@mbostock/sobel-operator) y [GeeksforGeeks - Kernels in CNN](https://www.geeksforgeeks.org/kernels-filters-in-convolutional-neural-network/).
* **Librerías de Referencia**: [Pixels.js (GitHub)](https://github.com/silvia-odwyer/pixels.js)

