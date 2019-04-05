let express = require('express');
let router = express.Router();
let brandController = require('../controller/brand.controller')

// routes
router.route('/')
    .get(brandController.findAll);
router.route('/:id')
    .get(brandController.findOne);


module.exports = router;