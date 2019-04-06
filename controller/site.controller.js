let Site = require('../model/site');

// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("site");
    Site.find({}, function(err, sites){
        if(err) res.status(500).json({err: err});
        res.status(200).json(sites);
    });
};


exports.findOne = (req, res) => {
    Site.findById(req.params.id, (err, site) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "Site not found with id " + req.params.id
            });
        }
        res.json(site);
    })
};
