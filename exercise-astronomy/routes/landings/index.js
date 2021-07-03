const router = require("express").Router();

const getNameAndMass = require('./getNameAndMass')
const getByMass = require('./getByMass')
const getRecclass = require('./getRecclass')


router.get('/', getNameAndMass)
router.get('/mass/:mass', getByMass)
router.get('/class/:recclass', getRecclass)

module.exports = router