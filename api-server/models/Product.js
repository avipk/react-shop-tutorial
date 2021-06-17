const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: String,
  price: {
    type: Number,
    required: true,
  },
});

const Product = model('Product', productSchema, 'product');

module.exports = Product;
