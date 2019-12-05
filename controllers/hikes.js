var User = require("../models/user");

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

//render a page where all hikes can be seen
function index(req, res, next) {
  console.log(req.query);
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render("hikes", {
        users,
        user: req.user,
        sortKey
      });
    });
}

//redirects to a specic hike's page
function show(req, res) {}

//creates a new hike ad redirects to hikes
function create(req, res) {
  req.user.hikes.push(req.body);
  req.user.save(function(err) {
    res.redirect("/hikes");
  });
}

function deleteHike(req, res) {}
