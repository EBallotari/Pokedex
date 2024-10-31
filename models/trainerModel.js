const trainers = []; 

const createTrainer = (name, pokemons) => {
    const newTrainer = {
        id: trainers.length + 1,
        name,
        pokemons, 
    };
    trainers.push(newTrainer);
    return newTrainer;
};

const getTrainers = () => trainers;
const getTrainerById = (id) => trainers.find(t => t.id === parseInt(id));

module.exports = { createTrainer, getTrainers, getTrainerById };
