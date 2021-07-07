const LandingModel = require('../models/Landings_new')

const getNameAndMass = async (measure) => {
    const result = await LandingModel.find({ mass: { $gte: measure } })
    return result

}

const getByMass = async (measure) => {
    const result = await LandingModel.find({ mass: measure })
    return result

}

const getRecclass = async (data) => {
    const result = await LandingModel.find({ recclass: data })
    return result

}

const getIntervalYears = async (from = "0", to = new Date().getFullYear().toString) => {
    console.log("query", from, to)
    const resultado = await LandingModel.find({ year: { $gte: from, $lte: to } }).sort({year: 1})
    console.log(resultado)
    return resultado

    // console.log(fecha)
    // const result = await LandingModel.find( { year: new Date('1990-02-03')})
    // console.log("result en query", result)
    //
}


module.exports = {
    getNameAndMass,
    getByMass,
    getRecclass,
    getIntervalYears,
}