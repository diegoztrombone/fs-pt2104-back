const { getByPha } = require('../../querys/neas')

module.exports = async (req, res, next) => {
    const { pha } = req.query
    console.log("entra", pha)
    const result = await getByPha(pha)
    
    return res.status(200).json({
        success: true,
        data: result,
    })
}