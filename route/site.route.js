let express = require('express');
let router = express.Router();
let siteController = require('../controller/site.controller')

// routes
router.route('/')
    .get(siteController.findAll);
router.route('/:id')
    .get(siteController.findOne);


module.exports = router;