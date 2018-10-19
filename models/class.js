const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  major: { type: String, required: true },
  courseNumber: { type: String, required: true },
  className: String,
  professor: String,
  reviews: [{type: Schema.Types.ObjectId,ref: "Review"}],
  grade: [Number],
  cost: [Number],
  use: [Number]
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;