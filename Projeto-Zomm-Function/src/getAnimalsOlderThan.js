const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((animais) => animais.name === animal).residents.every(
    (idade) => idade.age >= age,
  );
  return animals;
}

module.exports = getAnimalsOlderThan;
