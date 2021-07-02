const { URL, PORT, PUBLIC } = require('../constants')

module.exports = (req, res, next) => {
    console.log("<<<<", req.file)
    if(!req.file) {
        return next({ info: new Error('file is mandatory') })
    }

    const { filename } = req.file

    req.body.file = `${URL}:${PORT}${PUBLIC}/${filename}`

    next()
}