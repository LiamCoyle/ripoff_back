const Product = require('../model/product');



// Find and return all User from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while finding products."
        });
    });
};


exports.findOne = (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.id
        });
    });
};
