const servSales = require('../services/servSales');

const allcontrol = async (_req, res) => { 
  const { message } = await servSales.saleAll();
  return res.status(200).json(message);
};

const controlId = async (req, res) => { 
  const { id } = req.params;
  const result = await servSales.idSales(id);
  
  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json(result.message);
};

module.exports = {
  allcontrol,
  controlId,
};