const router = require("express").Router();
const classRoutes = require("./classes");

// Class routes
router.use(classRoutes);

module.exports = router;