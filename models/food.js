var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: { type: String, required: true, max: 15, trim: true, lowercase: true },
  ingredent: { type: String, required: true, trim: true, lowercase: true },
  procedure: { type: String, required: true, trim: true, lowercase: true },
});

// Export the model
module.exports = mongoose.model("Food", FoodSchema);
