const router = require("express").Router();
const classController = require("../../controllers/classController");

router.route("/search/all")
    .get(classController.findAll);

router.route("/search/:id")
    .get(classController.findById)

router.route("/search/reviews")
    .post(classController.create)


module.exports = router;
