const router = require("express").Router();

router.use('/landings', require('./landings'))

module.exports = router