let express = require('express');
let router = express.Router();
let authController = require('../controller/authentication.controller')
let auth = require('../_helper/auth');

// routes
router.post('/authenticate', authController.login);
router.get('/register', authController.register);
router.get('/logout', auth.token, authController.logout);


module.exports = router;