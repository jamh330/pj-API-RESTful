const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cadena de conexión a la base de datos
const uri = 'mongodb://localhost:27017/restful-api';

// Configuración de opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Conexión a la base de datos
mongoose.connect(uri, options)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.log('Error en la conexión a la base de datos:', error));

// Importa tus rutas aquí, por ejemplo:
const usersRouter = require('./routes/users.js');
const defaultRouter = require('./routes/default.js');
app.use('/users', usersRouter);
app.use('/', defaultRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

