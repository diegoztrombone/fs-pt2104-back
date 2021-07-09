
const { getNameAndMass, getIntervalYears } = require('../../querys/landings')


module.exports = async (req, res, next) => {
    const { minimum_mass, from, to } = req.query

    
    if (minimum_mass) {
        const result = await getNameAndMass(minimum_mass)
        return res.status(200).json({
            success: true,
            data: result,
        })
    }

    if (from || to) {
        console.log("entra en edad")
        const result = await getIntervalYears(from, to)
        return res.status(200).json({
            success: true,
            data: result,
        })
    }

    if (!minimum_mass) {
        return next({ info: new Error('No se han introducido los datos correctos')})
    }
    

    // if (!result.length || !from.length || !to.length) {
    //     console.log("IF3")
    //     return next({ info: new Error('No se han encontrado resultados')})
    // }

    



}

