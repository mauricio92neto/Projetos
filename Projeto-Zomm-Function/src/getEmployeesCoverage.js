const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(idOrName) {
  const employee = employees.filter((item) => idOrName === undefined || item.id === idOrName.id
  || item.firstName === idOrName.name || item.lastName === idOrName.name);
  if (employee.length === 0) {
    throw new Error('Informações inválidas');
  }
  const objRetorno = [];
  for (let i = 0; i < employee.length; i += 1) {
    const specie = species.filter((animal) => employee[i].responsibleFor.includes(animal.id));
    objRetorno.push({
      id: employee[i].id,
      fullName: `${employee[i].firstName} ${employee[i].lastName}`,
      species: specie.map((item) => item.name),
      locations: specie.map((item) => item.location),
    });
  }
  return (objRetorno.length === 1 ? objRetorno[0] : objRetorno);
}

module.exports = getEmployeesCoverage;
