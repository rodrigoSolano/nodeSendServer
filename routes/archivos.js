const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const archivosController = require('../controllers/archivosController');

router.post(
  '/',
  auth,
  archivosController.subirArchivo,
);

router.get(
  '/:archivo',
  archivosController.descargar,
  archivosController.eliminarArchivo,
);

router.delete(
  '/:id',
  auth,
  archivosController.eliminarArchivo,
);

module.exports = router;
