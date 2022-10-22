const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!Array.isArray(entrants) || entrants === undefined) {
    return {
      child: 0,
      adult: 0,
      senior: 0,
    };
  }

  const criança = entrants.filter((crianças) => crianças.age < 18);
  const adulto = entrants.filter((adultos) => adultos.age >= 18 && adultos.age < 50);
  const velhos = entrants.filter((velhoss) => velhoss.age >= 50);
  return {
    child: criança.length,
    adult: adulto.length,
    senior: velhos.length,
  };
}

function calculateEntry(entrants) {
  const result = countEntrants(entrants);
  let valor = result.child * prices.child;
  valor += result.adult * prices.adult;
  valor += result.senior * prices.senior;

  return valor;
}

module.exports = { calculateEntry, countEntrants };
