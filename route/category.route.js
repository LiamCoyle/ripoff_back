let express = require('express');
let router = express.Router();
let categoryController = require('../controller/category.controller')

// routes
router.route('/')
    .get(categoryController.findAll);
router.route('/:id')
    .get(categoryController.findOne);


module.exports = router;