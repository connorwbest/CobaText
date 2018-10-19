const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  class: {type: Schema.Types.ObjectId, ref: 'Class'},
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  grade: {type: Number, required: true},
  usage: {type: Number, required: true},
  summary: {type: String, required: true}
});

var Review = mongoose.model("Review", reviewSchema);

module.exports = Review;