const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TextBookApp");

const classSeed = [
  {
    major: "MAR",
    courseNumber: "3023",
    className: "Marketing",
    reviews: [],
    grade: [],
    purchase: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3203",
    className: "Supply Chain and Operations Management",
    reviews: [],
    grade: [],
    purchase: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3323",
    className: "Integrated Marketing Communication",
    reviews: [],
    grade: [],
    purchase: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3391",
    className: "Professional Selling",
    reviews: [],
    grade: [],
    purchase: [],
    use: []
  }
];

db.Class.remove({})
  .then(() => db.Class.collection.insertMany(classSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
