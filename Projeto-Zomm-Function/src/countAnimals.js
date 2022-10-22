const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(Animals) {
  if (Animals) {
    const object = species.find(
      (animal) => (!Animals.specie || animal.name === Animals.specie),
    );
    const Count = object.residents.filter(
      (animal) => (!Animals.sex || animal.sex === Animals.sex),
    ).length;
    return Count;
  }
  const object = {};
  species.forEach((obj) => {
    object[obj.name] = obj.residents.length;
  });
  return object;
}
module.exports = countAnimals;
