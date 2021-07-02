const UserModel = require('../models/Users')
const getAge = require('../utilities/getAge')

const createUser = async (user) => {
    return await UserModel.create(user)
}

const getUser = async (user) => {
    const { username, birthdate, profile_pic } = await UserModel.findOne(user)
    const age = getAge(birthdate)
    console.log(age, username, birthdate, profile_pic)
    return { username, age, profile_pic }
}

module.exports = {
    createUser,
    getUser,
}