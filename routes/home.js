var express = require("express");
var router = express.Router();
var homeCtrl = require("../controllers/home");

//add routes here

router.get("/", homeCtrl.index);

module.exports = router;
