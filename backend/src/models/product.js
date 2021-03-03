const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  image: String,
  video: Number,
  description: String,
  madeUp: Date,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
