const productModel = require('../models');

const allServ = async () => { 
  const result = await productModel.newModel();
  return { type: null, message: result };
};

const servId = async (id) => { 
  const result = await productModel.newId(id); 
  if (result) { return { message: result, status: 200 }; }
  return { message: 'Product not found', status: 404 };
};

const addServ = async (name) => { 
  const addProduct = await productModel.addInsertProd(name);
  const addIds = await productModel.newId(addProduct);

  return { type: null, message: addIds };
};

const serviceUpDate = async (product) => { 
  const { id } = product;

  const verifik = await productModel.newId(id);
  if (verifik) {
    await productModel.modelUpdate(product);
    return { message: product, status: 200 };
  }
  return { message: 'Product not found', status: 404 };
};
 
const servDel = async (id) => { 
  const verifi = await productModel.newId(id);
  if (verifi) {
    await productModel.modelet(id);
    return { status: 204 };
  }
  return { message: 'Product not found', status: 404 };
};
module.exports = {
  allServ,
  servId,
  addServ,
  serviceUpDate,
  servDel,
};