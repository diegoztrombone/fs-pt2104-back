
const { getNameAndMass } = require('../../querys/landings')


module.exports = async (req, res, next) => {
    const { minimum_mass } = req.query
    if (!minimum_mass) {
        
        return next({ info: new Error('No se han introducido los datos correctos')})
    }
    console.log(minimum_mass.length)
    const result = await getNameAndMass(minimum_mass)

    if (!result.length) {
        console.log("IF3")
        return next({ info: new Error('No se han encontrado resultados')})
    }

    res.status(200).json({
        success: true,
        data: result,
    })



}

