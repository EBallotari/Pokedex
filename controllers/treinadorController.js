const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getTreinadorPage = (req, res) => {
    const treinador = treinadorModel.getTreinador(); 
    const pokemons = pokemonModel.getPokemons(); 
    res.render('treinador', { treinador, pokemons }); 
};

const createTreinador = (req, res) => {
    const { nome, pokemonIds } = req.body;
    const pokemons = pokemonIds.map(id => pokemonModel.getPokemonById(id)).filter(p => p !== undefined);
    trainerModel.createTreinador(nome, pokemons);
    res.redirect('/treiandor');
};

module.exports = { getTreinadorPage, createTreinador };
