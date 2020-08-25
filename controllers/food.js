var Food = require("../models/food");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};

// Get all causes
exports.getAllFood = function (req, res) {
  Food.find()
    .select("_id name ingredent procedure")
    .then((allFood) => {
      return res.status(200).json({
        Foods: allFood,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};
exports.food_create = function (req, res) {
  var food = new Food({
    name: req.body.name,
    ingredent: req.body.ingredent,
    procedure: req.body.procedure,
  });

  food.save(function (err) {
    if (err) {
      res.status(500).send(err);
    }
    res.send("Food Created successfully");
  });
};

exports.food_details = function (req, res) {
  Food.findById(req.params.id, function (err, food) {
    if (err) {
      res.status(500).send(err);
    }
    res.send(food);
  });
};

exports.food_update = function (req, res) {
  Food.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    food
  ) {
    if (err) {
      res.status(500).send(err);
    }
    res.send("Food udpated.");
  });
};

exports.food_delete = function (req, res) {
  Food.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(500).send(err);
    }
    res.send("Deleted successfully!");
  });
};
