var Hike = require("../models/user");

module.exports = {
  new: newHike,
  index,
  show,
  create,
  delete: deleteHike
};

function newHike(req, res) {
  res.render("hikes/new");
}

function index(req, res) {
  Hike.find({}, function(err, hikes) {
    res.render("hikes/index", { hikes });
  });
}

function show(req, res) {}

function create(req, res) {
  var hike = new Hike(req.body);
  hike.save(function(err) {
    if (err) return res.render("hikes/new");
    res.redirect("/hikes");
  });
}

function deleteHike(req, res) {}
