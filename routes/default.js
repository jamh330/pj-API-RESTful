const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'Bienvenid@ a la ruta por defecto' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;