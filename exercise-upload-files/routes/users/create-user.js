const { createUser } = require('../../queries/users')

module.exports = async (req, res, next) => {
    const { username, email, name, birthdate, file: profile_pic  } = req.body
    console.log(profile_pic)
    const result = await createUser({ username, email, name, birthdate, profile_pic })
    res.status(200).json({
        success: true,
        data: result,


    })
}

