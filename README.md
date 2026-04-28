
# 🎨 Web Drawing Tool

Una aplicación interactiva orientada al procesamiento digital de imágenes y dibujo a mano alzada. El sistema permite la creación de lienzos desde cero o la edición de archivos externos mediante una interfaz intuitiva y funcional.

## 🖌️ Herramientas de Dibujo
La aplicación cuenta con un motor de dibujo dinámico con:
* **Lápiz y Goma**: Herramientas con gestión de parámetros ajustables.
* **Personalización**: Posibilidad de modificar el grosor y el color del trazo mediante un selector cromático.

## 📷 Procesamiento de Imágenes y Filtros
Permite la carga de imágenes locales para su manipulación en tiempo real con los siguientes filtros:

* **Brillo**
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
