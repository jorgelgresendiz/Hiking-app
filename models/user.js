var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  review: { type: String },
  rating: { type: Number }
});

// a hike can have many reviews and ratings
var hikeSchema = new Schema({
  name: { type: String },
  location: { type: String },
  reviews: [reviewSchema]
});

//a user can have many hikes
var userSchema = new Schema({
  email: { type: String },
  googleId: { type: String },
  hikes: [hikeSchema]
});

module.exports = mongoose.model("User", userSchema);
