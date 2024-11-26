const pokemons = []; 

module.exports = {
    getAll: () => pokemons,
    add: (pokemon) => pokemons.push(pokemon),
};
