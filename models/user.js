var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  review: { type: String },
  date: { type: Date }
});

var ratingSchema = new Schema({
  rating: { type: Number }
});

// a hike can have many reviews and ratings
var hikeSchema = new Schema({
  name: { type: String },
  reviews: [reviewSchema],
  ratings: [ratingSchema]
});

//a user can have many hikes
var userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  googleId: { type: String },
  hikes: [hikeSchema]
});

module.exports = mongoose.model("User", userSchema);
