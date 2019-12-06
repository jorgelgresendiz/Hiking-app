var User = require("../models/user");

module.exports = {
  index,
  newReview,
  create
};

function index(req, res) {
  res.render("reviews/index");
}

function create(req, res) {
  req.user.hikes.reviews.push(req.body);
  console.log(`helloooo`, req.body);
  req.user.save(function(err) {
    res.redirect("/hikes");
  });
}

function newReview(req, res) {
  res.render("reviews/new");
}
