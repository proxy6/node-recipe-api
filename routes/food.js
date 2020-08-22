var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var food_controller = require("../controllers/food");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", food_controller.test);

router.post("/create", food_controller.food_create);

router.get("/:id", food_controller.food_details);

router.put("/:id/update", food_controller.food_update);

router.delete("/:id/delete", food_controller.food_delete);

module.exports = router;
