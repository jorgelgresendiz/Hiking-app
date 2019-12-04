var express = require("express");
var router = express.Router();
var hikesCtrl = require("../controllers/hikes");

/* GET all hikes that are added */
router.get("/", hikesCtrl.index);

module.exports = router;
