let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    mail: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    password: { type: String, required: true },
    /*societe: { type: String, required: false },
    siret: { type: String, required: false },
    tel: { type: String, required: false },*/
    name: { type: String, required: false },
   /* adresse: { type: String, required: false },
    cp: { type: String, required: false },
    ville: { type: String, required: false },
    site: { type: String, required: false },
    
    createdDate: { type: Date, default: Date.now , required: false}*/
    createdAt: { type: Date, required: false},
    isAdmin : { type: Boolean, default: false, required: false }
});
schema.pre('save', function(next) {
    let currentDate = new Date();

    this.updatedAt = currentDate;
    
    if (!this.createdAt)
        this.createdAt = currentDate;

    next();
});
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);