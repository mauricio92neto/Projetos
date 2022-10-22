const connection = require('./db/connection');

const newModel = async () => { 
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const newId = async (id) => { 
  const [[result]] = await connection.execute(
 `SELECT * FROM StoreManager.products WHERE id = ${id}`,
  );
  return result;
};

const addInsertProd = async (name) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?)', [name],
  );
  return insertId;
};

const modelUpdate = async (product) => { 
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ? ',
    [product.name, product.id],
  );
  return result;
};
const modelet = async (id) => { 
  const result = await connection.execute(
    'DELETE FROM StoreManager.products WHERE ID = ?', [id],

  );
  return result;
};

module.exports = {
  newId,
  newModel,
  addInsertProd,
  modelUpdate,
  modelet,
};