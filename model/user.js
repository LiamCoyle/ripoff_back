const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    mail: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    password: { type: String, required: true },
    societe: { type: String, required: false },
    siret: { type: String, required: false },
    tel: { type: String, required: false },
    username: { type: String, required: false },
    adresse: { type: String, required: false },
    cp: { type: String, required: false },
    ville: { type: String, required: false },
    site: { type: String, required: false },
    isAdmin : { type: Boolean, required: false },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);