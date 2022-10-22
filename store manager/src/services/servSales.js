const modelSales = require('../models/modelSales');

const saleAll = async () => { 
  const result = await modelSales.allSales();
  return { type: null, message: result };
};

const idSales = async (id) => {
  const result = await modelSales.salesId(Number(id));
  if (result.length !== 0) { return { message: result, status: 200 }; }
  return { message: 'Sale not found', status: 404 };
};
  
module.exports = {
  saleAll,
  idSales,
};
