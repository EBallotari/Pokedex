const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/treinador', treinadorController.getTreiandorPage);

router.post('/treinador', treinadorController.createTreinador);

module.exports = router;
