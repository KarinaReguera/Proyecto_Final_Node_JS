Proyecto Final: API REST con Node.js + Firebase

Descripción
API desarrollada con Node.js que permite la gestión de productos a través de operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Los datos se almacenan en Firestore (Firebase) y la arquitectura del proyecto se organiza en capas para garantizar escalabilidad y mantenibilidad.


Tecnologías utilizadas

•	Node.js + Express: Framework principal para levantar el servidor.
•	Express: gestiona rutas y middleware
•	Nodemon: recargar automáticamente el servidor durante el desarrollo.
•	Firebase Firestore: Base de datos en la nube NoSQL.
•	dotenv: Manejo seguro de variables de entorno.
•	Modularidad por capas: Separación clara entre rutas, controladores, servicios y modelos


Estructura por capas
src/
├── config/		Configuración de Firebase y variables de entorno (.env)
    ├── db.js	Configuración de la Base de Datos

├── controllers/	Controladores. Lógica que corresponde a las rutas
    ├── product.controller.js

├── services/		Servicios. Capa que conecta modelos con controladores. Lógica de negocios
    ├── product.service.js

├── routes/		Rutas de la API (endpoints disponibles)
    ├── product.route.js

├── models		Modelo de datos. Acceso a Firestore (consultas y modificaciones de datos)
    ├── product.model.js

├── middlewares/    Autenticación (JWT), validaciones, manejo de errores
    ├── auth.middleware.js

├── utils/      Herramientas auxiliares como __dirname, join, etc.

└── index.js	Punto de entrada del servidor

└── package.json	Dependencias y scripts

└── README.md	    Documentación del proyecto



Seguridad
•	Variables sensibles como credenciales de Firebase se encuentran en .env.



Rutas 

Metodo 	     Enpoint	   Descripción
•	GET /api/products → listar todos
•	GET /api/products/:id → obtener por ID
•	POST /api/products → crear nuevo producto
•	PUT /api/products/:id → actualizar producto
•	DELETE /api/products/:id → eliminar



Documento en Firestore

Cada producto está almacenado como un documento dentro de la colección productos. 
Estructura básica:

•	nombre: nombre del producto (string)
•	precio: valor numérico en moneda local
•	disponible: booleano que indica si el producto está activo

Firestore asigna automáticamente un id único para cada documento, que se utiliza en los endpoints PUT y DELETE.