let express = require('express');
let router = express.Router();
let productTypeController = require('../controller/productType.controller')

// routes
router.route('/')
    .get(productTypeController.findAll);
router.route('/:id')
    .get(productTypeController.findOne);


module.exports = router;