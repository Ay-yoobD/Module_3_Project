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
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE category = "Bottoms";', (err, results) => {
      if (err) return reject(err);
      resolve(results);

    })

  })

}

const LoadProdsSneakers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE category = "Sneakers";', (err, results) => {
      if (err) return reject(err);
      resolve(results);

    })

  })

}

const LoadProdsAccesories = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE category = "Accessories";', (err, results) => {
      if (err) return reject(err);
      resolve(results);

    })

  })

}

const LoadProdsFeatured = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products WHERE is_featured = 1;', (err, results) => {
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


// ---------- NEW: TOPS by gender ----------
const LoadProdsTopsByType = (type) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Tops" AND type = ?;';
    db.query(sql, [type], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsTopsByTypeCon = (req, res) => {
  const { type } = req.params; // e.g. "Male" | "Female" | "Youth"
  LoadProdsTopsByType(type)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by type:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

// ---------- NEW: TOPS by style ----------
const LoadProdsTopsByStyle = (style) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Tops" AND style = ?;';
    db.query(sql, [style], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsTopsByStyleCon = (req, res) => {
  const { style } = req.params; // e.g. "Casual" | "Formal" | "SmartCasual" | "Sport"
  LoadProdsTopsByStyle(style)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by style:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

// ---------- OPTIONAL: TOPS by price range (min/max querystring) ----------
const LoadProdsTopsByPrice = (min, max) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Tops" AND price BETWEEN ? AND ?;';
    db.query(sql, [min, max], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsTopsByPriceCon = (req, res) => {
  const min = Number(req.query.min ?? 0);
  const max = Number(req.query.max ?? 999999);
  LoadProdsTopsByPrice(min, max)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by price:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};
// ---------- NEW: Bottoms by gender ----------
const LoadProdsBottomsByType = (type) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Bottoms" AND type = ?;';
    db.query(sql, [type], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsBottomsByTypeCon = (req, res) => {
  const { type } = req.params; // e.g. "Male" | "Female" | "Youth"
  LoadProdsBottomsByType(type)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by type:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

// ---------- NEW: Bottoms by style ----------
const LoadProdsBottomsByStyle = (style) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Bottoms" AND style = ?;';
    db.query(sql, [style], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsBottomsByStyleCon = (req, res) => {
  const { style } = req.params; // e.g. "Casual" | "Formal" | "SmartCasual" | "Sport"
  LoadProdsBottomsByStyle(style)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by style:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

// ---------- OPTIONAL: Bottoms by price range (min/max querystring) ----------
const LoadProdsBottomsByPrice = (min, max) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE category = "Bottoms" AND price BETWEEN ? AND ?;';
    db.query(sql, [min, max], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const LoadProdsBottomsByPriceCon = (req, res) => {
  const min = Number(req.query.min ?? 0);
  const max = Number(req.query.max ?? 999999);
  LoadProdsBottomsByPrice(min, max)
    .then(prods => res.json({ prods }))
    .catch(error => {
      console.error('Error loading products by price:', error);
      res.status(500).json({ error: 'Failed to load products' });
    });
};

module.exports = {
  LoadProdsTopsCon, LoadProdsBottomsCon, LoadProdsSneakersCon, LoadProdsAccessoriesCon, LoadProdsFeaturedCon,
  LoadProdsTopsByTypeCon,
  LoadProdsTopsByStyleCon,
  LoadProdsTopsByPriceCon,
  LoadProdsBottomsByTypeCon,
  LoadProdsBottomsByStyleCon,
  LoadProdsBottomsByPriceCon
};
