const db = require('../db/db.js');

const LoadProds = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE category = "Tops";', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsCon = (req, res) => {
  LoadProds()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

module.exports = { LoadProdsCon };
