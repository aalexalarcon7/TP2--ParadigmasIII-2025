# TP2--ParadigmasIII-2025


Informe de Mejoras – Proyecto “Luxury Car’s”

Resumen del Trabajo Práctico 1
Consignas Frontend: Portada principal (index.html) Sección que liste todos los productos en forma de tabla (listado_tabla.html) 
Sección que liste todos los productos en forma de box (listado_box.html)
Sección que muestre la ficha de un producto en particular (producto.html)
Sección para completar el formulario de compra (comprar.html), el mismo deberá contener los siguientes datos: nombre del cliente, dirección, teléfono, E-mail, medio de pago y listado de productos. 
Detalle de la entrega: Se debe enviar un link del repositorio GIT, dentro del mismo deberá estar el código fuente y el documento en formato PDF con el análisis y diseño de la app (avances). 

Nota: se evalúa el HTML y el CSS Introducción 

Nombre del Proyecto: Luxury Car's - Concesionaria Premium Online 
El proyecto Luxury Car's es una plataforma web para explorar y comprar autos de lujo. Los usuarios pueden ver los productos en formato tabla o grid, obtener detalles sobre cada vehículo, y completar una compra de forma sencilla y eficiente. El sistema también incluye opciones de pago y un proceso de compra simplificado. 

Objetivos Generales 
Crear una plataforma web interactiva para explorar y comprar autos de lujo. Implementar funcionalidades de compra en línea con diferentes métodos de pago. Brindar una experiencia de usuario agradable con un diseño visual atractivo y adaptado a dispositivos móviles. 

Objetivos 
Específicos Desarrollar 
Un catálogo de autos con opciones de visualización en tabla y grid. Permitir la selección de auto y completar una compra con un formulario. 
Mejorar la experiencia de compra con la inclusión de métodos de pago (tarjeta, efectivo). 
Integrar un sistema de recomendaciones de autos según el interés del usuarios 

Análisis de la Aplicación 
La aplicación consta de las siguientes características: 
Catálogo de autos: El sistema presenta una lista de autos de lujo, como el Aston Martin Vantage y el Bentley Continental GT. 
Los autos están organizados en dos vistas: una tabla y una cuadrícula (grid). Cada auto incluye detalles como el modelo, precio, y opciones de visualización. 
Ficha de cada auto: Al hacer clic en "Ver ficha", el usuario puede ver los detalles específicos de cada vehículo, como el motor, la potencia, el consumo, entre otros. 
Proceso de compra: Se proporciona un formulario donde los usuarios ingresan su nombre, dirección, teléfono, correo electrónico y método de pago para finalizar la compra (Solo se puede comprar un auto a la vez). 

Tecnologías utilizadas: 
HTML: Para la estructura de la página. 
CSS: Para el diseño y la estética de la página.
JavaScript: Para la funcionalidad dinámica de la aplicación, como actualizar la información del auto y mostrar el mensaje de compra exitosa. 

Diseño de la Aplicación La interfaz de usuario está diseñada para ser intuitiva y fácil de usar. 
Las secciones principales incluyen: 
Portada Principal: La página de inicio presenta un banner atractivo con una imagen “hero” y un llamado a la acción para explorar el catálogo de autos. 
Catálogo de autos: Los autos se presentan en dos formatos: una tabla y una cuadrícula (grid). Los dos formatos permiten a los usuarios ver rápidamente las opciones disponibles. 
Formulario de compra: Los usuarios pueden seleccionar un auto, ingresar sus datos de compra (nombre, dirección, etc.) y elegir el método de pago. 

Estructura del proyecto:
index.html: Página de inicio con el catálogo de autos. 
listado_tabla.html: Página con la vista en tabla de los autos. 
listado_box.html: Página con la vista en cuadrícula de los autos. 
producto.html: Página de detalles del auto seleccionado. 
comprar.html: Página de formulario de compra. 
El diseño de la interfaz se basa en colores oscuros y acentuados con verde y dorado para dar una sensación de lujo y exclusividad. 

Conclusiones 
Realizando el proyecto tratando de hacer una interfaz sencilla y efectiva para la concesionaria de autos de lujo en línea. Trate de hacer una plataforma que sea fácil de usar, y que permita a los usuarios seleccionar y comprar autos de lujo de forma eficiente. El uso de HTML, CSS y JavaScript hizo que la experiencia sea más dinámica, permitiendo una buena navegación fluida entre las páginas de productos. En el futuro, se podrían agregar funcionalidades adicionales, como un sistema de recomendación de autos, más métodos de pago, integración con sistemas de envíos y una base de datos para gestionar los productos de forma más eficiente.



Objetivo del Trabajo Práctico 2:

Sección 1: Los objetivos y resumen del TP1
Sección 2: El detalle de las mejoras incorporadas al proyecto mediante el uso de JS.
Sección 3: El link del repositorio en el que están trabajando.
Sección 4: El link del proyecto en línea (uso del hosting).

El propósito fue continuar con el desarrollo del sitio web de la concesionaria de autos de lujo “Luxury Car’s”, incorporando nuevas funcionalidades, mejoras estéticas y ajustes técnicos que optimizan la experiencia del usuario y la organización del código.
Se buscó reforzar el uso de HTML, CSS (SCSS) y JavaScript aplicando principios de diseño responsivo, modularidad y buenas prácticas en la estructuración del código.
1. Incorporación de Nuevos Vehículos
Se agregaron nuevos autos al catálogo de productos, ampliando la oferta dentro del sitio. Los modelos añadidos fueron:
Rolls Royce Cullinan


Ferrari SF90


Lamborghini Aventador


Mercedes-Benz G-Wagon


Lamborghini Urus


Cada vehículo cuenta con su propia ficha de producto con imagen, descripción, y diseño coherente con la estética general del sitio.
 En el apartado “Inicio” se ajustó la cuadrícula para que los autos nuevos se muestren correctamente, manteniendo simetría visual y adaptabilidad en pantallas móviles, tablets y escritorio.
2. Eliminación de Elementos Innecesarios
Se eliminaron secciones y botones no requeridos para esta versión del sitio, como:
El nombre no repite bajo las imágenes de los autos nuevos, dejando un diseño más limpio y minimalista.


Comentarios innecesarios del código fuente, para dejar los archivos más legibles y prolijos.


Estos cambios reducen la carga visual del sitio y mejoran la coherencia con el enfoque premium del proyecto.
3. Ajustes en el Diseño General (CSS/SCSS)
Se aplicaron modificaciones visuales y estructurales para mantener consistencia entre las secciones:
Corrección de márgenes, paddings y alineaciones para centrar correctamente los componentes del inicio y del GRID.


Eliminación de estilos redundantes y unificación de variables en :root (por ejemplo, paleta de colores principales: verde, naranja, azul, gris oscuro, etc.).


Animación de entrada (“fadeInUp”) agregada al body para generar un efecto visual moderno al cargar la página.


Ajustes en el footer para que se muestre de manera uniforme en todas las secciones, incluyendo autos nuevos.


El resultado es un diseño más fluido, liviano y atractivo.
4. Mejoras en el Comportamiento JavaScript
Se optimizaron los scripts para un funcionamiento más estable e intuitivo:
Dark Mode: Implementación de un modo oscuro con preferencia persistente.


Menú móvil responsive: Revisión de los event listeners para asegurar que el botón tipo “burger” funcione correctamente tanto en el inicio como en las páginas de productos.


Eliminación de funciones repetidas y refactorización del código, asegurando un comportamiento consistente en todas las secciones (Inicio, Tabla, Grid, Ficha).


Estas mejoras aumentan la usabilidad general y reducen errores de interacción.
5. Reestructuración de Archivos
Para una mejor organización del proyecto, se realizaron ajustes en la estructura:
Separación de estilos CSS y contenido HTML en archivos distintos.


Limpieza de comentarios y optimización del código fuente.


Revisión de la carpeta de productos, eliminando duplicados innecesarios.


Esto facilita futuras actualizaciones y contribuye a mantener un estándar profesional en el código.
6. Publicación y Control de Versiones
El sitio fue publicado en línea mediante Netlify, garantizando acceso público al proyecto y asegurando su funcionamiento en entorno productivo.
 Además, se mantiene un repositorio remoto en GitHub para versionar el código, controlar cambios y permitir un flujo de trabajo ordenado y transparente.
Conclusión
El proyecto “Luxury Car’s” tiene una versión más sólida y profesional.
 Las nuevas incorporaciones y ajustes no solo mejoran la presentación visual del sitio, sino también su mantenimiento y escalabilidad técnica.
 Se logró una web moderna, funcional y adaptable, cumpliendo con los objetivos propuestos de aplicar correctamente HTML, CSS y JavaScript en un entorno web real.

 LINK PAGINA: https://luxurycarsx.netlify.app/
 LINK GIT: https://github.com/aalexalarcon7/TP2--ParadigmasIII-2025

Informe de implementación del plugin 21/10
Se eligió este plugin porque permite validar formularios de manera flexible, mostrando mensajes de error personalizados sin alterar el diseño ni el flujo del sitio. Es uno de los plugins jQuery más usados para validación y facil de integrarlo al proyecto.

1. Desactivación de validación nativa:
En el archivo comprar.html se agregó el atributo novalidate al formulario para evitar los mensajes predeterminados del navegador y permitir que el plugin maneje la validación.
"<form id="purchase-form" novalidate>"
Integración del plugin:

2. Integración del plugin:
- Se creó un nuevo archivo public-js-validation-safe.js.
- En este archivo se importan automáticamente jQuery y jQuery Validation desde CDN (solo si no están presentes).
- Se configuraron las reglas de validación para los campos: nombre, dirección, teléfono, email, método de pago y producto (auto seleccionado).
- Se mostraron mensajes personalizados en español debajo de cada campo.
- Se agregó un borde rojo (outline) en los campos inválidos.

3. Incorporación en el proyecto:
En el comprar.html, al final del <body>, se añadió la referencia al script:
"<script src="public/js/validation-safe.js"></script>"

4. Pruebas realizadas:
- Se probaron casos con campos vacíos, teléfono con letras y correos sin “@”.
- El formulario muestra mensajes de error debajo de cada campo y no permite continuar hasta que todos sean válidos.
- Cuando todos los datos son correctos, el flujo original del sitio (mensaje de “Compra realizada con éxito”) se ejecuta normalmente.

