let User = require('../model/user');
let CONF = require('../config.json');
let bcrypt = require('bcrypt');

// Create and Save a new user
exports.create = (req, res) => {

    const user = new User({
        mail: req.body.mail,
        password: req.body.password,
        name:req.body.name
    });

    let hashedPassword = bcrypt.hashSync(req.body.password, CONF.salt);
    user.hashedPassword = hashedPassword;
    user.save((err, data)=>{
        if(err) res.status(500).json({err:err, message: "Error creating new user"});
        res.status(200).json(data);
    });
};
// Find and return all User from the database.
exports.findAll = (req, res) => {

    User.find({}, (err, users)=>{
        if(err){res.status(500).json({err:err, message: "Some error occurred while finding users."})}
        res.status(200).json(users)
    });
};


exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, user)=>{
        if(err){res.status(500).send({err:err, message:"Error retrieving user with id " + req.params.id})}
        if(!user){res.status(404).send({ message:"User not found with id " + req.params.id})}
        res.status(200).send(user)
    });
};

exports.update = (req, res) => {

    User.findByIdAndUpdate(req.params.id, {
        mail: req.body.mail,
        password: req.body.password,
        name:req.body.name
    }, {new: true}, (err, user)=>{
        if(err){res.status(500).send({err:err, message:"Error updating user with id " + req.params.id})}
        if(!user){res.status(404).send({ message:"User not found with id " + req.params.id})}
        res.status(200).send(user)

    });
};

// Delete a user with the specified userid in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user)=>{
        if(err) res.status(500).send({err:err, message:"Could not delete user with id " + req.params.id});
        if(!user) res.status(404).send({message:"user not found with id " + req.params.id});
        res.status(200).send({message:" user deleted success"});
    });


};