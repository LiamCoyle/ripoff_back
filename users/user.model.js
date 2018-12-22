const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    mail: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: false },
    adresse: { type: String, required: false },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);