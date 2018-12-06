const mongoose = require('mongoose');

// Define collection and schema for Users
var userSchema = mongoose.Schema({
  //_id: { type: mongoose.Schema.ObjectId, auto: true },
  name: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'user'
});
//var User = module.exports = mongoose.model('user', userSchema);
var User = mongoose.model('User', userSchema);


User.get = function (callback, limit) {
  User.find(callback).limit(limit);
};

module.exports = User;
//module.exports = mongoose.model('User', userSchema);