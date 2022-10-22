const connection = require('./db/connection');

const allSales = async () => {
  const [result] = await connection.execute(
    `SELECT id AS 'saleId',date, product_id AS 'productId',quantity
    FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id;`,
  );
  return result;
};

const salesId = async (id) => {
  const [result] = await connection.execute(
    `SELECT  date , product_id AS 'productId', quantity
    FROM StoreManager.sales
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = ?
    ORDER BY productId ASC `, [id],
  );
  return result;
};
module.exports = {
  allSales,
  salesId,
};