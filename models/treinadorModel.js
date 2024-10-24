const treinador = [];

const getTreinador = () => treinador;
const getTreinadorById = (id) => treinador.find(t => t.id === parseInt(id));
const createTreinador = (nome, pokemons) => {
    const newTreinador = {
        id: treinador.length + 1,
        nome,
        pokemons
    };
    treinador.push(newTreinador);
    return newTreinador;
};

module.exports = { getTreinador, getTreinadorById, createTreinador };
