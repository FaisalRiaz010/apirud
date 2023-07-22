const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middleware to parse JSON data in the request body
app.use(express.json());
app.use(cors());

// Require the database connection
require('./database');


// Require the Item model (the schema you defined in items.js)
const Item = require('./model/item');

// Require the item routes
const itemRoutes = require('./Routes/itemsRoutes');
app.use('/', itemRoutes);

// Start the server
const port = 5000;
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
});
