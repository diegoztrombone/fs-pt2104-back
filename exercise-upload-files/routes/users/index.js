const router = require("express").Router();


const { single } = require('../../config/multer')
const { checkFile, checkUser } = require('../../middlewares')



const getUser = require('./get-user')
const createUser = require('./create-user')


router.post('/new',[single, checkFile], createUser)
router.get('/:username', checkUser, getUser)

module.exports = router