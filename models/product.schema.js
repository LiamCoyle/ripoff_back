const mongoose = require('mongoose');

// Define collection and schema for Users
var productSchema = mongoose.Schema({
  //_id: { type: mongoose.Schema.ObjectId, auto: true },
  name: {
    type: String
  },
  url: {
    type: String
  },
  ean: {
    type: Number
  },
  idSite: {
    type:  mongoose.Schema.ObjectId,
    ref: 'site'
  },
  idMenu: {
    type: mongoose.Schema.ObjectId,
    ref: 'menu'
  },
  prix:{
    type: Number
  },
},{
    collection: 'product'
});
//var User = module.exports = mongoose.model('user', userSchema);
var Product = mongoose.model('Product', productSchema);


Product.get = function (callback, limit) {
    Product.find(callback).limit(limit);
};

module.exports = Product;
//module.exports = mongoose.model('User', userSchema);