const { allServ, servId, addServ, serviceUpDate, servDel } = require('../services');

const restProd = async (_req, res) => { 
  const resultado = await allServ();
  return res.status(200).json(resultado.message);
};
const byId = async (req, res) => { 
  const { id } = req.params;
  const resultado = await servId(id);

  if (resultado.status === 404) {
    return res.status(resultado.status).json({ message: resultado.message });
  }
  return res.status(resultado.status).json(resultado.message);
};
const controlAdd = async (req, res) => {
  const { name } = req.body;
  const { message } = await addServ(name);
  res.status(201).json(message);
};

const updateControl = async (req, res) => { 
  const { id } = req.params;
  const { name } = req.body;
  const item = { id, name };
  const result = await serviceUpDate(item);

  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json(result.message);
};
const deleteControl = async (req, res) => { 
  const { id } = req.params;
  const result = await servDel(id);
  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json(result.message);
};

module.exports = {
  restProd,
  byId,
  controlAdd,
  updateControl,
  deleteControl,
};