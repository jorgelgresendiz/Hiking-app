var express = require("express");
var router = express.Router();
var hikesCtrl = require("../controllers/hikes");

/* GET all hikes that are added */
router.get("/", hikesCtrl.index);

/*  create a new hike and redirect to all hikes */
router.post("/", hikesCtrl.create);

// CRUD-less route take to new page to create hike
router.get("/new", hikesCtrl.new);

module.exports = router;
