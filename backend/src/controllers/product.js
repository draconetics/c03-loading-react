const Product = require('../models/product');

module.exports = {
  index: async(req, res, next) => {
    console.log('getting products.');
    const products = await Product.find({});
    res.status(200).json(products);
  },

  newProduct: async (req, res, next) => {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.status(200).json(product);
  },
};
