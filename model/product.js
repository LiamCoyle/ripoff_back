let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    idSite: { type: Schema.Types.ObjectId, required: true },
    idProductType:{ type: Schema.Types.ObjectId, required: true},
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);