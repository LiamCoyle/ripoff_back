let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    mail: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    password: { type: String, required: true },
    /*societe: { type: String, required: false },
    siret: { type: String, required: false },
    tel: { type: String, required: false },*/
    username: { type: String, required: false },
   /* adresse: { type: String, required: false },
    cp: { type: String, required: false },
    ville: { type: String, required: false },
    site: { type: String, required: false },
    isAdmin : { type: Boolean, required: false },
    createdDate: { type: Date, default: Date.now , required: false}*/
});
schema.pre('save', function(next) {
    // get the current date
    let currentDate = new Date();

    // change the updated_at field to current date
    this.updatedAt = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.createdAt = currentDate;

    next();
});
/*schema.set('toJSON', { virtuals: true });*/

module.exports = mongoose.model('User', schema);