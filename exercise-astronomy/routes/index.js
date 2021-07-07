const router = require("express").Router();

router.use('/landings', require('./landings'))
router.use('/neas', require('./neas'))

module.exports = router