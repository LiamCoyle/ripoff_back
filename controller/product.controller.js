let Product = require('../model/product');



// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("product");
    Product.find({}, function(err, products){
        if(err) res.status(500).json({err: err});
        res.status(400).json(products);
    });
};


exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "Product not found with id " + req.params.id
            });
        }
        res.json(product);
    })
};
