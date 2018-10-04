const router = require("express").Router();
const classController = require("../../controllers/classController");

router.route('/search')
    .get(classController.findClasses)