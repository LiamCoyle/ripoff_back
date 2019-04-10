let ProductType = require('../model/productType');



// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("productType");
    ProductType.find({}, function(err, productTypes){
        if(err) res.status(500).json({err: err});
        res.status(200).json(productTypes);
    });
};


exports.findOne = (req, res) => {
    ProductType.findById(req.params.id, (err, productType) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "ProductType not found with id " + req.params.id
            });
        }
        res.status(200).json(productType);
    })
};

exports.findAllByCategory = (req, res) => {
    ProductType.find({idCategory: req.params.idCategory}, (err, productTypes) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "ProductType not found with Category id " + req.params.id
            });
        }
        res.status(200).json(productTypes);
    })
};
