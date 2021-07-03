const { getRecclass } = require('../../querys/landings')

module.exports = async (req, res, next) => {
    const { recclass } = req.params
    const result = await getRecclass(recclass)

    if (!result.length) {
        console.log("IF getRECLASS")
        return next({ info: new Error('No se han encontrado resultados')})
    }

    res.status(200).json({
        success: true,
        data: result,
    })

}