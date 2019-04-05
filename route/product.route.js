let express = require('express');
let router = express.Router();
let productController = require('../controller/product.controller')

// routes
router.route('/')
    .get(productController.findAll);
router.route('/:id')
    .get(productController.findOne);


module.exports = router;