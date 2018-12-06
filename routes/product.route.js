var router = require('express').Router();
var productController = require('../controllers/productController');
router.route('/')
    .get(productController.index)
    .post(productController.new);
router.route('/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);

module.exports = router;