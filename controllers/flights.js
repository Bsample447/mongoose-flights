const Flight = require("../models/flight");

function newFlight(req, res) {
  res.render("flights/new", { error: "" });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}

async function index(req, res) {
  res.render("flights/index", {
    flights: await Flight.find(),
  });
}

async function show(req, res) {
  res.render('flights/show', {
    flight: await Flight.findById(req.params.id),
      });
}

module.exports = {
  new: newFlight,
  create,
  index,
  show
};