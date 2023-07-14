const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();
// Database connection
require('./config/database');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./routes/index');
const destinationsRoute = require('./routes/destinations');
const flightsRoute = require('./routes/flights');
const ticketsRoute = require('./routes/tickets');

app.use('/', indexRoute);
app.use('/destinations', destinationsRoute);
app.use('/flights', flightsRoute);
app.use('/tickets', ticketsRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
