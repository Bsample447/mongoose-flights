const Flight = require('../models/flight');

// function to get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// function to create a new flight
exports.createFlight = async (req, res) => {
  try {
    const newFlight = new Flight(req.body);
    const savedFlight = await newFlight.save();
    res.json(savedFlight);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other flight-related functions...
