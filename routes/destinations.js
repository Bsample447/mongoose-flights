const express = require('express');
const router = express.Router();

const destinationsController = require('../controllers/destination');

// Example route to get all destinations
router.get('/', destinationsController.getAllDestinations);

// Example route to create a new destination
router.post('/', destinationsController.createDestination);

// Other destination routes...

module.exports = router;
