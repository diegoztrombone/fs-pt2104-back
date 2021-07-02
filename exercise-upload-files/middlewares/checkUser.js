
const UserModel = require("../models/Users")

module.exports = async (req, res, next) => {
    const { username } = req.params
    const result = await UserModel.findOne({username})
    if (!result) {
        next({info: new Error("Algo ha pasado")})
    }
    console.log(">>>>>", result)
    next()

}