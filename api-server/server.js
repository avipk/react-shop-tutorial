const env = require('./config');
const express = require('express');
const productsApi = require('./routes/products-route');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SHOP_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(`MongoDB error: ${err}`);
});
db.once('open', (err) => {
  console.log('MongoDB connected..');
});

const server = express();

server.use('/api-product', productsApi);

server.listen('3001', () => {
  console.log('API server ready on port 3001.');
});
