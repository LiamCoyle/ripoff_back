let Category = require('../model/category');


// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("category");
    Category.find({}, function(err, categories){
        if(err) res.status(500).json({err: err});
        res.status(200).json(categories);
    });
};


exports.findOne = (req, res) => {
    Category.findById(req.params.id, (err, category) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "Product not found with id " + req.params.id
            });
        }
        res.status(200).json(category);
    })
};
