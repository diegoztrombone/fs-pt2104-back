const LandingModel = require('../models/Landings_new')

const getNameAndMass = async (measure) => {
    const result = await LandingModel.find({ mass: { $gte: measure } }, { _id: 0, name: 1, mass: 1})
    return result

}

const getByMass = async (measure) => {
    const result = await LandingModel.find({ mass: measure }, { _id: 0, name: 1, mass: 1})
    return result

}

const getRecclass = async (data) => {
    const result = await LandingModel.find({ recclass: data }, { _id: 0, name: 1, recclass: 1})
    return result

}

const getIntervalYears = async (from, to) => {
    console.log("query", from, to)
    if (!from) {
        console.log("no from")
        return await LandingModel.find({ year: {$lte: to } }, { _id: 0, name: 1, mass: 1, year: 1}).sort({year: 1})
    }
    if (!to) {
        console.log("no from")
        return await LandingModel.find({ year: {$gte: from } }, { _id: 0, name: 1, mass: 1, year: 1}).sort({year: 1})

    }
    console.log("okk")
    return await LandingModel.find({ year: {$gte: from, $lte: to } }, { _id: 0, name: 1, mass: 1, year: 1}).sort({year: 1})
   

    // console.log(fecha)
    // const result = await LandingModel.find( { year: new Date('1990-02-03')})
    // console.log("result en query", result)
    //from = "0", to = new Date().getFullYear().toString()
}


module.exports = {
    getNameAndMass,
    getByMass,
    getRecclass,
    getIntervalYears,
}