let CONF = require('../config.json');
let User = require('../model/user');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

exports.login = (req, res) => {
   
    User.findOne({mail: req.body.mail }, function (err, user) {
        console.log("user", user);
        if (err) res.status(500).json('Error on the server.');

        if (!user) res.status(404).json('No user found.');
        console.log("form user password", req.body.password);
        console.log("stored user password", user.password);
        console.log(bcrypt.compareSync(req.body.password, user.password));
        if(bcrypt.compareSync(req.body.password, user.hashedPassword)){
            let token = jwt.sign({ id: user._id },CONF.secret, {
                expiresIn: 86400
            });
            res.status(200).json({ auth: true, token: token });
        }else{
            res.status(404).json('Password error');
        }
    });
};

exports.register = (req, res) => {

    let user = {
        mail : req.body.email,
        password : req.body.password,
        hashedPassword : bcrypt.hashSync(req.body.password, CONF.salt),
        isAdmin:req.body.role
    };
    
    User.save(user, function(err, current_user){
        if (err) return res.status(500).json(err);

        let token = jwt.sign({ id: user._id }, CONF.secret, {
                expiresIn: 86400
            });
        res.status(200).json({ auth: true, token: token, body: req.body });
    });
}

exports.logout = (req, res) => {
    res.status(200).json({ auth: false, token: null });
}