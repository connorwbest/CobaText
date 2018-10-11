const db = require("../models");

module.exports = {
  findByNumber: function(req, res) {
    db.Class.find({ courseNumber: req.body.number })
      .then(function(classes) {
        res.json(classes);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findAll: function(req, res) {
    db.Class.find(req.query)
      .then(function(classes) {
        res.json(classes);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findByMajor: function(req, res) {
    db.Class.find({ major: req.params.major })
      .then(function(classes) {
        res.json(classes);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findById: function(req, res) {
    db.Class.findById(req.params.id)
      .then(classes => res.json(classes))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Review.create(req.body)
      .then(review => res.json(review))
      .catch(err => res.status(422).json(err));
  },
  findReviews: function(req, res) {
    db.Review.find({ class: req.params.id })
      .then(function(reviews) {
        res.json(reviews);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  updateClass: function(req, res) {
    db.Class.findOneAndUpdate({ _id: req.body.class }, {$push: {"grade": req.body.grade, "purchase": req.body.purchase, "use": req.body.usage}})
      .then(course => res.json(course))
      .catch(err => res.status(422).json(err));
  }
};
