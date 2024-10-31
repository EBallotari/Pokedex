const trainerModel = require('../models/trainerModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
};

const createTrainer = (req, res) => {
    const { name, pokemons } = req.body;
    const pokemonList = pokemons ? pokemons.map(id => pokemonModel.getPokemonById(id)) : []; // Obtém a lista de Pokémon por ID
    trainerModel.createTrainer(name, pokemonList);
    res.redirect('/trainers');
};

module.exports = { getAllTrainers, createTrainer };
