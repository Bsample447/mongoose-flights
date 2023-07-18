const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'OAJ', 'RDU'],
    required: true,
  },
  arrival: { type: Date, required: true },
});

module.exports = mongoose.model('Destination', destinationSchema);