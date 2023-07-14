const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // other destination properties...
});

module.exports = mongoose.model('Destination', destinationSchema);
