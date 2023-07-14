const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  // Define flight schema properties
  airline: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  // other flight properties...
});

module.exports = mongoose.model('Flight', flightSchema);
