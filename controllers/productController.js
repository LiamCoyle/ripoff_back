// userController.js
// Import user model
Product = require('../models/product.schema');
// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Product retrieved successfully",
            data: products
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var product = Product({
        name : req.body.name || 'default name',
        url : req.body.url || null,
        menu_id : req.body.menu_id,
        prix : req.body.prix,
        ean : req.body.ean,
        site_id : req.body.site_id,
    });
    //user.name = req.body.name ? req.body.name : user.name;
    //user.password = req.body.password;
// save the contact and check for errors
    product.save(function (err) {
        res.json({
            message: 'New user created!',
            data: product
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'product details loading..',
            data: product
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Product.findById(req.params.user_id, function (err, product) {
        if (err)
            res.send(err);
            product.name = req.body.name || "default product name";
            product.url = req.body.url;
            product.menu_id = req.body.menu_id;
            product.prix = req.body.prix;
            product.site_id = req.body.site_id;
            product.ean = req.body.ean;

// save the user and check for errors
    product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'product Info updated',
                data: product
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, contact) {
        if (err)
            res.send(err);
    res.json({
            status: "success",
            message: 'product deleted'
        });
    });
};