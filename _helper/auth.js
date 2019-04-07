let jwt = require('jsonwebtoken');
let conf = require('config.json');
let User = require('../model/user')

exports.token = (req, res, next) => {

    if (req.headers['authorization']) {
        let token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, conf.secret, (err, decoded) => {
                if (err) {
                    res.status(403).json({ status: "error", message: err.message });
                } else {
                    console.log(`id: ${decoded.id}`);
                    
                    User.findById(decoded.id, (err, user)=>{
                        req.user= user;
                        next();
                    });
                    
                }
            });
        } else
            res.status(401).json({ status: "error", message: "token required" });
    } else
        res.status(401).json({ status: "error", message: "token required" });
}

exports.admin = (req, res, next) => {
    let user = req.user;
    if (user.isAdmin == true) {
        next();
    } else {
        res.status(403).json({ status: "error", message: "admin required" });
    }

}
