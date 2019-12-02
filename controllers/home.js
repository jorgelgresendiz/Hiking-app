var Home = require("../models/home");

module.exports = {
  index
};

//functions go here

function index(req, res) {
  res.render("home/index");
}
