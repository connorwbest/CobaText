const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  major: { type: String, required: true },
  courseNumber: { type: String, required: true },
  className: String,
  reviews: [{type: Schema.Types.ObjectId,ref: "Review"}],
  grade: [Number],
  purchase: [Number],
  use: [Number]
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;