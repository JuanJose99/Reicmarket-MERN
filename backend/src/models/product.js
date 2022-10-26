const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    logo: { type: String, required: false }
});

module.exports = mongoose.model('Product', ProductSchema);