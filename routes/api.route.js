// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RipOff!',
    });
});

// Export API routes
router.use('/user', require('./user.route'));
router.use('/product', require('./product.route'));
module.exports = router;