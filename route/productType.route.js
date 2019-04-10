let express = require('express');
let router = express.Router();
let productTypeController = require('../controller/productType.controller')

// routes
router.route('/')
    .get(productTypeController.findAll);
router.route('/:id')
    .get(productTypeController.findOne);
router.route('/category/:idCategory')
    .get(productTypeController.findAllByCategory);


module.exports = router;