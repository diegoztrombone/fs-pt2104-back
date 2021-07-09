
const {getOrbitClass, getByDate} = require('../../querys/neas')
module.exports = async (req, res, next) => {
    const { orbit_class, from, to } = req.query

    
    if (orbit_class) {
        const result = await getOrbitClass(orbit_class)
        if (!result.length) {
            return next({ info: new Error('No se ha encontrado nada')})
        }
        return res.status(200).json({
            success: true,
            data: result,
        })
    }

    if (from || to) {
        console.log("entra en fecha")
        const result = await getByDate(from, to)
        return res.status(200).json({
            success: true,
            data: result,
        })
    }

    if (!orbit_class) {
        return next({ info: new Error('No se han introducido los datos correctos')})
    }
    

    

    



}
