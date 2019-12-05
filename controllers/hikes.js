var User = require("../models/user");

module.exports = {
  new: newHike,
  index,
  show,
  create,
  deleteHike
};

//render to a new page to create a new hike
function newHike(req, res) {
  res.render("hikes/new");
}

//render a page where all hikes can be seen
function index(req, res, next) {
  console.log(req.query);
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

//to create a new hike must go into user and push
function create(req, res) {
  req.user.hikes.push(req.body);
  console.log(req.body);
  req.user.save(function(err) {
    res.redirect("/hikes");
  });
}

function deleteHike(req, res) {
  console.log("fire");
  User.findOne({ "hikes._id": req.params.id }, function(err, user) {
    user.hikes.id(req.params.id).remove();
    console.log("fire");

    user.save(function(err) {
      res.redirect("/hikes");
    });
  });
}
