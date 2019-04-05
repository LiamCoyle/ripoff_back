let express = require('express');
let router = express.Router();
let userController = require('../controller/user.controller');
let auth = require('../_helper/auth');

// routes
router.route('/')
    .get(auth.token, userController.findAll);

router.route('/:id')
    .get(auth.token, userController.findOne)
    .put(auth.token, userController.update)
    .delete(auth.token, userController.delete);



module.exports = router;