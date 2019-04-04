const CONF = require('../config.json');
const User = require('../models/user.model.js');
exports.login = (req, res) => {
    User.findOne({mail: req.body.mail, hashedPassword : bcrypt.hashSync(req.body.password, CONF.salt)  }, function (err, user) {

        if (err) return res.status(500).send('Error on the server.');

        if (!user) return res.status(404).send('No user found.');

        let token = jwt.sign({ id: user._id },CONF.secret, {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token });
    });

};

exports.register = (req, res) => {

    let user = {
        mail : req.body.email,
        password : req.body.password,
        hashedPassword : bcrypt.hashSync(req.body.password, CONF.salt),
        isAdmin:req.body.role
    };
    
    userService.create(user);

    if (err) return res.status(500).send(err);

    // create a token
    let token = jwt.sign({ id: user._id }, CONF.secret, {
        expiresIn: 86400
    });

    res.status(200).send({ auth: true, token: token, body: req.body });


}

exports.logout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
}