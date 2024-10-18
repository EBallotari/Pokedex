const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getALLPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

module.exports = router;