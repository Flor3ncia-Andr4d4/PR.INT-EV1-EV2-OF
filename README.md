# Proyecto React - Primera Parte EV1-EV2

## Instrucciones para ejecutar el proyecto

Para probar este proyecto en tu computadora:

1. Cloná este repositorio.
2. Abrí la carpeta del proyecto con un editor de código (por ejemplo, Visual Studio Code).
3. Abrí la terminal y ejecutá: npm install

Esto va a instalar todas las dependencias necesarias.

4. Cuando termine la instalación, ejecutá:npm run dev


5. La terminal va a mostrarte una dirección local, como `http://localhost:5173`. Abrila en tu navegador.

Y listo, ya deberías ver la app funcionando con los productos cargados desde la API.

---

##  Descripción general del proyecto

Este proyecto fue hecho con React, usando Tailwind CSS para los estilos y Axios para conectarse con una API.

### ¿Qué hace?

- Se conecta a la API de DummyJSON y trae una lista de productos.
- Muestra esos productos con su título y precio.
- Permite buscar productos por su nombre (barra de búsqueda).
- Muestra un panel con estadísticas:

- Producto más caro.
- Producto más barato.
- Cuántos productos tienen títulos largos.
- Precio total.
- Promedio de precios.
- Promedio de descuentos.



---

##  Estructura de los componentes

Dentro de la carpeta `components`, están estos archivos:

### `Productos.jsx`
- Es el componente principal.
- Hace el fetch a la API.
- Guarda los productos en el estado.
- Filtra según lo que se escriba en la barra de búsqueda.
- Renderiza el panel de estadísticas y la lista de productos.

### `ProductList.jsx`
- Muestra todos los productos (filtrados o no) en formato de grilla.
- Cada producto muestra título y precio.
- Tiene estilos con Tailwind y animaciones simples (`fade-in`).

### `StatsPanel.jsx`
- Calcula y muestra estadísticas generales sobre los productos.
- Si no hay productos filtrados, no se muestra nada.

### `App.jsx`
- Es el componente raíz.
- Muestra el título general y carga el componente `Productos`.

---

##  Estilos y diseño

- Todo el diseño está hecho con **Tailwind CSS**.
- Se usa una clase `fade-in` para animaciones suaves al cargar.
- Se cuida que todo se vea limpio, con separación, sombras, bordes redondeados y adaptabilidad a diferentes tamaños de pantalla.

---

##  Vista previa del proyecto

A continuación se muestran imágenes del proyecto funcionando:

![Vista previa](./screenshot.png)
![Vista previa](./screenshot2.PNG)

---












