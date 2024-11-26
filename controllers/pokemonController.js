const Pokemon = require('../models/pokemonModel');

module.exports = {
    formCadastrarPokemon: (req, res) => {
        res.render('cadastrar_pokemon');
    },
    cadastrarPokemon: (req, res) => {
        const { nome, tipo } = req.body;
        Pokemon.add({ nome, tipo });
        res.redirect('/');
    },
};
