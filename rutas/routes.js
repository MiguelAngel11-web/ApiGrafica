const express = require('express');//Importar libreria
const router = express.Router();
const axios = require('axios')

const ctrlDatos = require('../controlador');

router.get('/xbox', ctrlDatos.ApiXbox);

router.get('/nintendo',ctrlDatos.ApiNintendo);

router.get('/play',ctrlDatos.ApiPlay);

module.exports = router;