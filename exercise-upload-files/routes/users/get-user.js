const {getUser} = require('../../queries/users')

module.exports = async (req, res, next) => {
    if(!req.params) {
        return next({ info: new Error('Algo ha pachao') })
    }
    const user = req.params
    const result = await getUser(user)
    res.status(200).json({
        success: true,
        data: result,
    })
}