// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// App setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const {  LoadProdsTopsCon  } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load/tops',  LoadProdsTopsCon );

const {  LoadProdsBottomsCon } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load/bottoms',  LoadProdsBottomsCon );

const {  LoadProdsSneakersCon } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load/sneakers',  LoadProdsSneakersCon );

const {  LoadProdsAccessoriesCon } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load/accessories',  LoadProdsAccessoriesCon );

const {  LoadProdsFeaturedCon } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load/featured',  LoadProdsFeaturedCon );

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
