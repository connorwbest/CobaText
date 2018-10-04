const db = require("../models");

module.exports = {
  findClasses: function(req, res) {
    db.Class.find({ courseNumber: req.body.courseNumber })
      .then(function(classes) {
        res.json(classes);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
