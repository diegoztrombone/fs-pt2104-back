const { getByMass } = require('../../querys/landings')

module.exports = async (req, res, next) => {
    const { mass } = req.params
    const result = await getByMass(mass)

    if (!result.length) {
        console.log("IF getbyMass")
        return next({ info: new Error('No se han encontrado resultados')})
    }

    res.status(200).json({
        success: true,
        data: result,
    })

}