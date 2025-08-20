// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// App setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

//---------------------------------- Routes function importing: ------------------------------------------
const {
  LoadProdsTopsCon,
  LoadProdsBottomsCon,
  LoadProdsSneakersCon,
  LoadProdsAccessoriesCon,
  LoadProdsFeaturedCon,
  LoadProdsTopsByTypeCon,
  LoadProdsTopsByStyleCon,
  LoadProdsTopsByPriceCon,
  LoadProdsBottomsByTypeCon,
  LoadProdsBottomsByStyleCon,
  LoadProdsBottomsByPriceCon,
  LoadProdsSneakersByTypeCon,
  LoadProdsSneakersByStyleCon,
  LoadProdsSneakersByPriceCon,
  LoadProdsAccessoriesByTypeCon,
  LoadProdsAccessoriesByStyleCon,
  LoadProdsAccessoriesByPriceCon,

} = require('./ShopFuncs/ShopFuncs.js');

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

//---------------------------------- Base Loaders Routes: -----------------------------------------

app.get('/products/load/tops', LoadProdsTopsCon);
app.get('/products/load/bottoms', LoadProdsBottomsCon);
app.get('/products/load/sneakers', LoadProdsSneakersCon);
app.get('/products/load/accessories', LoadProdsAccessoriesCon);
app.get('/products/load/featured', LoadProdsFeaturedCon);

//---------------------------------- Tops Filter Routes: ------------------------------------------

app.get('/products/load/tops/type/:type', LoadProdsTopsByTypeCon);
app.get('/products/load/tops/style/:style', LoadProdsTopsByStyleCon);
app.get('/products/load/tops/price', LoadProdsTopsByPriceCon);

//---------------------------------- Bottoms Filter Routes: ---------------------------------------

app.get('/products/load/bottoms/type/:type', LoadProdsBottomsByTypeCon);
app.get('/products/load/bottoms/style/:style', LoadProdsBottomsByStyleCon);
app.get('/products/load/bottoms/price', LoadProdsBottomsByPriceCon);

//---------------------------------- Sneakers Filter Routes: --------------------------------------

app.get('/products/load/sneakers/type/:type', LoadProdsSneakersByTypeCon);
app.get('/products/load/sneakers/style/:style', LoadProdsSneakersByStyleCon);
app.get('/products/load/sneakers/price', LoadProdsSneakersByPriceCon);

//------------------------------- Accessories Filter Routes: --------------------------------------

app.get('/products/load/accessories/type/:type', LoadProdsAccessoriesByTypeCon);
app.get('/products/load/accessories/style/:style', LoadProdsAccessoriesByStyleCon);
app.get('/products/load/accessories/price', LoadProdsAccessoriesByPriceCon);

app.use((req, res) => {
  console.log("Unmatched route:", req.method, req.url);
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
