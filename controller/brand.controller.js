let Brand = require('../model/brand');



// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("brand");
    Brand.find({}, function(err, brands){
        if(err) res.status(500).json({err: err});
        res.status(200).json(brands);
    });
};


exports.findOne = (req, res) => {
    Brand.findById(req.params.id, (err, brand) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "Brand not found with id " + req.params.id
            });
        }
        res.json(brand);
    })
};
