const mockProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor",
  },
  {
    "id": 2,
    "name": "Traje de encolhimento",

  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const invaled = 'd';

const returnService = {
  status: 200,
  message: mockProducts[0]
}

const returnNotFound = {
  status: 404,
  message: 'Product not found'
}



module.exports = {
  invaled,
  mockProducts,
  returnService,
  returnNotFound,
}