const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller')

// routes
router.get('/', productController.getAll);
router.get('/:id', productController.getById);


module.exports = router;