const LandingModel = require('../models/Landigs')

const getNameAndMass = async (measure) => {
    const result = await LandingModel.find( { mass: { $gte: measure } })
    return result

}

const getByMass = async (measure) => {
    const result = await LandingModel.find( { mass: measure })
    return result

}

const getRecclass = async (data) => {
    const result = await LandingModel.find( { recclass: data })
    return result

}

const getIntervalYears = async (from, to) => {
    
    
    console.log(from, to)
    const result = await LandingModel.find( { year: { $gt: new Date(from)}})
    console.log("result en query", result)
    return result

}


module.exports = {
    getNameAndMass,
    getByMass,
    getRecclass,
    getIntervalYears,
}