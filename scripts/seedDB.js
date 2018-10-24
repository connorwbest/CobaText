const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TextBookApp");

const classSeed = [
  {
    major: "MAR",
    courseNumber: "3023",
    className: "Marketing",
    professor: "Carolyn Massiah",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3023",
    className: "Marketing",
    professor: "Ganga Hewage",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3203",
    className: "Supply Chain and Operations Management",
    professor: "Andrew Johnson",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3203",
    className: "Supply Chain and Operations Management",
    professor: "Rama Naraharisetti",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3203",
    className: "Supply Chain and Operations Management",
    professor: "Shahed Obeidat",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3323",
    className: "Integrated Marketing Communication",
    professor: "Donel Richemond",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3391",
    className: "Professional Selling",
    professor: "Stefanie Garcia",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3391",
    className: "Professional Selling",
    professor: "Karla Desousa",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "MAR",
    courseNumber: "3391",
    className: "Professional Selling",
    professor: "Brenna Covel",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "FIN",
    courseNumber: "2100",
    className: "Personal Finance and Investments",
    professor: "Paul Gregg",
    reviews: [],
    grade: [],
    cost: [],
    use: []
  },
  {
    major: "FIN",
    courseNumber: "2100",
    className: "Personal Finance and Investments",
    professor: "Vijay Maraj",
    reviews: [],
    grade: [],
    cost: [],
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
