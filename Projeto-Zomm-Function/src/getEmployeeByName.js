const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionarios = employees.find((funcionario) => funcionario.firstName === employeeName
  || funcionario.lastName === employeeName);
  return (funcionarios === undefined) ? {} : funcionarios;
}

module.exports = getEmployeeByName;
