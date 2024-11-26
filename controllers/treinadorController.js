const Treinador = require('../models/treinadorModel');
const Pokemon = require('../models/pokemonModel');

module.exports = {
    listarTreinadores: (req, res) => {
        const treinadores = Treinador.getAll();
        res.render('index', { treinadores });
    },
    formCadastrarTreinador: (req, res) => {
        const pokemons = Pokemon.getAll();
        res.render('cadastrar_treinador', { pokemons });
    },
    cadastrarTreinador: (req, res) => {
        const { nome, pokemonsSelecionados } = req.body;
        const pokemons = Pokemon.getAll();
        const pokemonsDoTreinador = pokemonsSelecionados
            ? pokemonsSelecionados.map(id => pokemons[id])
            : [];
        Treinador.add({ nome, pokemons: pokemonsDoTreinador });
        res.redirect('/');
    },
};
