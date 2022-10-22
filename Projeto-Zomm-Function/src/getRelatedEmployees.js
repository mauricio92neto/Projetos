const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const gerentes = employees.some((gerente) => gerente.managers.includes(id));
  return gerentes;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filtered = employees.filter((item) => item.managers.includes(managerId));
    const animals = filtered.reduce(
      (acumulator, elemento) => acumulator.concat(
        (`${elemento.firstName} ${elemento.lastName}`),
      ), [],
    );
    return animals;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
