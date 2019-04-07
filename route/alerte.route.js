let express = require('express');
let router = express.Router();
let alerteController = require('../controller/alerte.controller')

// routes
router.route('/')
    .get(alerteController.findAll)
    .post(alerteController.create);
router.route('/:id')
    .get(alerteController.findAllForUser)
    .put(alerteController.update)
    .delete(alerteController.delete);


module.exports = router;