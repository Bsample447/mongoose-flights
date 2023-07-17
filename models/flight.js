const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United", "Delta"] },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "OAJ", "RDU"],
    default: "DEN",
  },
  flightNo: { type: Number, require: true, min: 10, max: 9999 },
  depart: { type: Date },
});

module.exports = mongoose.model("Flight", flightSchema);