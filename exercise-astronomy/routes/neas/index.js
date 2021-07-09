const router = require("express").Router();

router.get('/', require('./querycontroller_neas') )
router.get('/dangerneas', require('./getPha'))

module.exports = router