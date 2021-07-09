const router = require("express").Router();

const queryController = require('./querycontroller_landings')
const getByMass = require('./getByMass')
const getRecclass = require('./getRecclass')


router.get('/', queryController)
router.get('/mass/:mass', getByMass)
router.get('/class/:recclass', getRecclass)


module.exports = router