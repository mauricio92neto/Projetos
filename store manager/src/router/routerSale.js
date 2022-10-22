const express = require('express');
const controlSale = require('../controllers/controlSales');

const router = express.Router();

router.get('/', controlSale.allcontrol);
router.get('/:id', controlSale.controlId);

module.exports = router;
