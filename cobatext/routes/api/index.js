const router = require("express").Router();
const classRoutes = require("./classes");

// Class routes
router.use("/search", classRoutes);

module.exports = router;