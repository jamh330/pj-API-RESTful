// Importar el enrutador de Express y el modelo de usuario
const router = require('express').Router();
const User = require('../models/users.js');


// Definir la ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    // Obtener todos los usuarios y enviar una respuesta con un objeto JSON que contiene los usuarios
    const users = await User.find();
    res.json(users);
  } catch (error) {
    // Enviar una respuesta de error con un código de estado 500 y un objeto JSON que contiene el mensaje de error
    res.status(500).json({ message: error.message });
  }
});

// Definir la ruta para obtener un usuario por su ID
router.get('/:id', getUser, (req, res) => {
  // Enviar una respuesta con un objeto JSON que contiene el usuario correspondiente
  res.json(res.user);
});

// Definir la ruta para agregar un nuevo usuario
router.post('/', async (req, res) => {
  // Crear un nuevo objeto de usuario a partir de los datos de la solicitud
  const user = new User({
    name: req.body.name
  });

  try {
    // Guardar el nuevo usuario en la base de datos y enviar una respuesta con un código de estado 201 y el objeto JSON que contiene el nuevo usuario
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    // Enviar una respuesta de error con un código de estado 400 y un objeto JSON que contiene el mensaje de error
    res.status(400).json({ message: error.message });
  }
});

// Definir la ruta para actualizar un usuario por su ID
router.put('/:id', getUser, async (req, res) => {
  // Verificar si el campo de nombre está presente en la solicitud y actualizar el nombre del usuario correspondiente si es necesario
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }

  try {
    // Guardar los cambios en la base de datos y enviar una respuesta con un objeto JSON que contiene el usuario actualizado
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    // Enviar una respuesta de error con un código de estado 400 y un objeto JSON que contiene el mensaje de error
    res.status(400).json({ message: error.message });
  }
});

// Definir la ruta para eliminar un usuario por su ID
router.delete('/:id', getUser, async (req, res) => {
  try {
    // Elimina al usuario en la base de datos y enviar una respuesta con un objeto JSON con un mensaje de éxito
    const userDelete = await User.findByIdAndDelete(req.params.id);
    res.json('Ususario eliminado: '+userDelete.name);
  } catch (error) {
    // Enviar una respuesta de error con un código de estado 400 y un objeto JSON que contiene el mensaje de error
    res.status(400).json({ message: error.message });
  }
});


// Middleware para obtener un usuario por su ID y almacenarlo en la respuesta
async function getUser(req, res, next) {
  let user;

  try {
    // Buscar el usuario correspondiente por su ID y almacenarlo en la variable "user"
    user = await User.findById(req.params.id);

    if (user == null) {
      // Enviar una respuesta de error con un código de estado 404 y un mensaje de error si no se encuentra el usuario
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    // Enviar una respuesta de error con un código de estado 500 y un objeto JSON que contiene el mensaje de error si hay algún error al buscar el usuario
    return res.status(500).json({ message: error.message });
  }

  // Almacenar el usuario en la respuesta y continuar con la siguiente función de middleware o la función de ruta correspondiente
  res.user = user;
  next();
}

module.exports = router;