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

const { LoadProdsCon } = require('./ShopFuncs/ShopFuncs.js');
app.get('/products/load', LoadProdsCon);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
