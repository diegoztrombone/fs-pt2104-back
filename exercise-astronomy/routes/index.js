const router = require("express").Router();

router.use('/user', (req, res) => {
    res.send("OK")
})

module.exports = router