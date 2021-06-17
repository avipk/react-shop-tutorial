const config = require('../config');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const prods = require('./dummyProds');

const overideDB = process.argv.includes('overide');
console.log(overideDB ? 'overriding data' : 'will not override');

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

if (overideDB) {
  deleteDb()
    .then(insertData)
    .then(() => mongoose.connection.close());
} else {
  isDBHasData().then((hasData) => {
    if (hasData) {
      console.log('DB  shop.product already fiiled with data.');
      mongoose.connection.close();
    } else {
      insertData();
    }
  });
}

async function isDBHasData() {
  const p = await Product.findOne({});

  return p != null;
}

async function deleteDb() {
  await Product.deleteMany({});
  console.log('DB shop.product truncated.');
}

async function insertData() {
  await Product.insertMany(prods);
  console.log('DB shop.product initiated with dummy data.');
}
