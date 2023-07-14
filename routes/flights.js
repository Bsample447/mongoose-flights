const express = require('express');
const router = express.Router();

const flightsController = require('../controllers/flights');

// route to get all flights
router.get('/', flightsController.getAllFlights);

// route to create a new flight
router.post('/', flightsController.createFlight);

// Other flight routes...

module.exports = router;
