const express = require('express');
const router = express.Router();
const productService = require('../service/product.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);


module.exports = router;


function getAll(req, res, next) {
    productService.getAll()
        .then(products => res.json(products))
        .catch(err => next(err));
}

function getById(req, res, next) {
    productService.getById(req.params.id)
        .then(product => product ? res.json(product) : res.sendStatus(404))
        .catch(err => next(err));
}

