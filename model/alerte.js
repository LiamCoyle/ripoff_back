let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    idUser: {type: Schema.Types.ObjectId, required: true },
    idProductType :{type: Schema.Types.ObjectId, required: true},
    maxPrice: {type: Number}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Alerte', schema, "alertes");