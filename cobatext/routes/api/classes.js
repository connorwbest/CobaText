const router = require("express").Router();
const classController = require("../../controllers/classController");

router.route("/all")
    .get(classController.findAll);

router.route('/:number')
    .get(classController.findByNumber);

router.route('/null/:major')
    .get(classController.findByMajor);

router.route('/:number/:major')
    .get(classController.findOne)

module.exports = router;
