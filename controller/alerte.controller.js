let Alerte = require('../model/alerte');
let ObjectId = require('mongoose').Types.ObjectId;

// Create and Save a new user
exports.create = (req, res) => {

    const alerte = new Alerte({
        name: req.body.name,
        idUser: req.body.idUser,
        idProductType :req.body.idProductType,
        maxPrice : req.body.maxPrice
    });

    alerte.save((err, data)=>{
        if(err) res.status(500).json({err:err, message: "Error creating new alerte"});
        res.status(200).json(data);
    });
};

// Find and return all User from the database.
exports.findAll = (req, res) => {
    console.log("alerte");
    Alerte.find({}, function(err, alertes){
        if(err) res.status(500).json({err: err});
        res.status(200).json(alertes);
    });
};


exports.findAllForUser = (req, res) => {
    console.log("req param id", req.params.id);
    let searchOptions = {idUser: req.params.id};
    console.log(searchOptions);
    Alerte.find(searchOptions, (err, alertes) => {
        console.log("err", err);
        console.log("alertes", alertes);
        if(err){
            res.status(500).json({
                err: err,
                message: "Error alerte for user " + req.params.id
            });
        }
        if(!alertes){
            res.status(404).json({
                err: err,
                message: "Alertes not found for user id " + req.params.id
            });
        }
        res.status(200).json(alertes);
    })
};

exports.findOne = (req, res) => {
    Alerte.findById(req.params.id, (err, alerte) => {
        if(err){
            res.status(404).json({
                err: err,
                message: "Alerte not found with id " + req.params.id
            });
        }
        res.status(200).json(alerte);
    })
};



exports.update = (req, res) => {

    Alerte.findByIdAndUpdate(req.params.id, {
        mail: req.body.mail,
        password: req.body.password,
        name:req.body.name
    }, {new: true}, (err, alerte)=>{
        if(err){res.status(500).send({err:err, message:"Error updating alerte with id " + req.params.id})}
        if(!alerte){res.status(404).send({ message:"alerte not found with id " + req.params.id})}
        res.status(200).send(alerte)

    });
};

// Delete a user with the specified alerteid in the request
exports.delete = (req, res) => {
    Alerte.findByIdAndRemove(req.params.id, (err, alerte)=>{
        if(err) res.status(500).send({err:err, message:"Could not delete alerte with id " + req.params.id});
        if(!alerte) res.status(404).send({message:"alerte not found with id " + req.params.id});
        res.status(200).send({message:" alerte deleted success"});
    });


};