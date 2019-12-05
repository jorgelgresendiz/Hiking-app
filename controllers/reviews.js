var User = require("../models/user");

module.exports = {
  index,
  newReview
  // create,
};

function index(req, res) {
  res.render("reviews/index");
}

// function create(req, res) {
//   res.redirect("/hikes/reviews");
// }

function newReview(req, res) {
  res.render("reviews/new");
}
