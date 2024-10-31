const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');
const pokemonModel = require('../models/pokemonModel');

router.get('/trainers', trainerController.getAllTrainers);

router.get('/trainers/new', (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('newTrainer', { pokemons });
});

router.post('/trainers', trainerController.createTrainer);

module.exports = router;
