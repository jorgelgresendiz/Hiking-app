var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var homeSchema = new Schema({});

module.exports = mongoose.model("Home", homeSchema);
