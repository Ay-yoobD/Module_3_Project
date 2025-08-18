const db = require('../db/db.js');

const LoadProdsTops = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE category = "Tops";', (err, results) => {
      if (err) return reject(err);
      resolve(results);

    });

  });

};

const LoadProdsTopsCon = (req, res) => {
  LoadProdsTops()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });

    });

};

const LoadProdsBottoms = () => {
  return new Promise((resolve,reject) =>  {
    db.query('SELECT * FROM products WHERE category = "Bottoms";', (err,results) =>{
      if (err) return reject(err);
      resolve(results);

    })

  })
  
}

const LoadProdsSneakers = () => {
  return new Promise((resolve,reject) =>  {
    db.query('SELECT * FROM products WHERE category = "Sneakers";', (err,results) =>{
      if (err) return reject(err);
      resolve(results);

    })

  })
  
}

const LoadProdsAccesories = () => {
  return new Promise((resolve,reject) =>  {
    db.query('SELECT * FROM products WHERE category = "Accessories";', (err,results) =>{
      if (err) return reject(err);
      resolve(results);

    })

  })
  
}

const LoadProdsFeatured = () => {
  return new Promise((resolve,reject) =>  {
    db.query('SELECT * FROM products WHERE is_featured = 1;', (err,results) =>{
      if (err) return reject(err);
      resolve(results);

    })

  })
  
}

const LoadProdsBottomsCon = (req, res) => {
  LoadProdsBottoms()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });
      
    });

};

const LoadProdsSneakersCon = (req, res) => {
  LoadProdsSneakers()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });
      
    });

};

const LoadProdsAccessoriesCon = (req, res) => {
  LoadProdsAccesories()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });
      
    });

};

const LoadProdsFeaturedCon = (req, res) => {
  LoadProdsFeatured()
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products:', error);
      res.status(500).json({ error: 'Failed to load products' });
      
    });

};
module.exports = { LoadProdsTopsCon, LoadProdsBottomsCon, LoadProdsSneakersCon, LoadProdsAccessoriesCon,LoadProdsFeaturedCon };
