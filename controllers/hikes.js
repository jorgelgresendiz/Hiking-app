var Hike = require("../models/user");

module.exports = {
  index,
  show,
  create,
  delete: deleteHike
};

function index(req, res) {
  Hike.find({}, function(err, hikes) {
    res.render("hikes/index", { title: "All Hikes", hikes });
  });
}

function show(req, res) {}

function create(req, res) {}

function deleteHike(req, res) {}
