const Product = require('../models/Product');

async function findProductById(id) {
  const p = await Product.findOne({ _id: id });
  return p;
}

async function findProductsByName(name) {
  const rx = new RegExp(`^${name}.*`, 'i');
  const p = await Product.find({ name: rx });

  console.log(`found prods for ${rx}: ${p}`);
  return p;
}

module.exports = {
  findProductById,
  findProductsByName,
};
