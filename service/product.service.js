const config = require('config.json');
const db = require('_helpers/db');
const Product = db.Product;


module.exports = {
    getAll,
    getById
};

async function getAll() {
    return await Product.find();
}

async function getById(id) {
    return await Product.findById(id);
}