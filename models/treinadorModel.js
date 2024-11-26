const treinadores = []; 

module.exports = {
    getAll: () => treinadores,
    add: (treinador) => treinadores.push(treinador),
};
