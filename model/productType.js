let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    idBrand: { type: Schema.Types.ObjectId, required: true },
    idCategory: { type: Schema.Types.ObjectId, required: true },
    img: { type: String },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ProductType', schema, "productTypes");