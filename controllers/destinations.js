const Destination = require('../models/destination');

//function to get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

//function to create a new destination
exports.createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const savedDestination = await newDestination.save();
    res.json(savedDestination);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other destination-related functions...
