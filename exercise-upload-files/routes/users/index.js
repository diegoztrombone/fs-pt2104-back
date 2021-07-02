const router = require("express").Router();


const { single } = require('../../config/multer')
const { checkFile } = require('../../middlewares')



const getUser = require('./get-user')
const createUser = require('./create-user')


router.post('/new',[single, checkFile], createUser)
router.get('/:username', getUser)

module.exports = router