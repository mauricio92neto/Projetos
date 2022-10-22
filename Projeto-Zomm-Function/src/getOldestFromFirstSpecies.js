const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const ids = employees.find((element) => element.id === id).responsibleFor[0];
  const residentes = [...species.find((element) => element.id === ids).residents];
  const old = residentes.sort((ageA, ageB) => (ageB.age - ageA.age))[0];
  return Object.values(old);
}

module.exports = getOldestFromFirstSpecies;
