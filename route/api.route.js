const express = require('express');
const router = express.Router();
const authController = require('../controller/authentication.controller')

// routes
router.get('/authenticate', authController.login);
router.get('/register', authController.register);
router.get('/logout', authController.logout);


module.exports = router;