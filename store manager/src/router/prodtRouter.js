const express = require('express');
const validName = require('../middlewares/validadeName');
const { productControl } = require('../controllers');

const router = express.Router();

router.get('/', productControl.restProd);
router.get('/:id', productControl.byId);
router.post('/', validName, productControl.controlAdd);

router.put('/:id', validName, productControl.updateControl);
router.delete('/:id', productControl.deleteControl);

module.exports = router;