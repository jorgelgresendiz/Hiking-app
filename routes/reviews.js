var express = require("express");
var router = express.Router();
var reviewsCtrl = require("../controllers/reviews");

/* GET all reviews of a hike  */
router.get("/", reviewsCtrl.index);

// /*  create a new review and redirect to that page's reviews */
// router.post("/reviews", reviewsCtrl.create);

/* GET and delete a specificied review */
// router.delete("/:id", isLoggedIn, reviewsCtrl.delete);

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/auth/google");
// }

module.exports = router;
