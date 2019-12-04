var Hike = require("../models/user");

module.exports = {
  new: newHike,
  index,
  show,
  create,
  delete: deleteHike
};

//render to a new page to create a new hike
function newHike(req, res) {
  res.render("hikes/new");
}
//render a page where all hike can be seen
function index(req, res) {
  Hike.find({}, function(err, hikes) {
    res.render("hikes", { hikes });
  });
}

//redirects to a specic hike's page
function show(req, res) {}

//creates a new hike ad redirects to hikes
function create(req, res) {
  var hike = new Hike(req.body);
  hike.save(function(err) {
    if (err) return res.render("hikes/new");
    res.redirect("/hikes");
    console.log(req.body);
  });
}

function deleteHike(req, res) {}
