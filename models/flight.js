const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'OAJ', 'RDU'],
    required: true,
  },
  arrival: { type: Date, required: true },
});


const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United", "Delta", "SpaceX"] },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "OAJ", "RDU"],
    default: "DEN",
  },
  flightNo: { type: Number, require: true, min: 10, max: 9999 },
  depart: { type: Date },
  destinations: [destinationSchema]
});



module.exports = mongoose.model("Flight", flightSchema);