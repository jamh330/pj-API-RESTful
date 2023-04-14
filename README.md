# RESTful API con Node.js, Express y MongoDB

Este proyecto es una API RESTful simple construida con Node.js, Express y MongoDB. La API permite crear, leer, actualizar y eliminar usuarios en una base de datos MongoDB.

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

## Requisitos previos

Antes de ejecutar este proyecto localmente, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Cómo ejecutar el proyecto localmente

1. Clona este repositorio:

git clone https://github.com/tu-usuario/restful-api.git


2. Navega hasta la carpeta del proyecto:

cd restful-api


3. Instala las dependencias:

npm install


4. Inicia el servidor:

npm start


La API RESTful ahora debería estar ejecutándose en [http://localhost:3000](http://localhost:3000).

## Rutas y recursos disponibles

Este proyecto incluye las siguientes rutas y recursos:

- Ruta Default: GET `/`
- Crear un usuario: POST `/users`
- Obtener todos los usuarios: GET `/users`
- Obtener un usuario por ID: GET `/users/:id`
- Actualizar un usuario por ID: PUT `/users/:id`
- Eliminar un usuario por ID: DELETE `/users/:id`

Para obtener más información sobre cómo utilizar estas rutas y recursos, consulta el código fuente en la carpeta `routes`.

## Contribuciones

Si deseas contribuir a este proyecto, no dudes en enviar un Pull Request o abrir un Issue para discutir las mejoras o correcciones que podrían realizarse.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.
