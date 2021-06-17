const router = require('express').Router();
const productsApi = require('../api/product-api');

router.get('/search/:name', async (req, res) => {
  const { name } = req.params;
  const products = await productsApi.findProductsByName(name);

  res.json(products);
});

router.get('/search', async (req, res) => {
  const products = await productsApi.findProductsByName('');

  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productsApi.findProductById(id);

  res.json(product);
});

module.exports = router;
