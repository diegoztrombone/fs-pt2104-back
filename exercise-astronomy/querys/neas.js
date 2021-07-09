const NeasModel = require('../models/NEAS')

const getOrbitClass = async (data) => {
    const result = await NeasModel.find({ orbit_class: data }, { _id: 0, designation: 1, period_yr: 1 })
    return result
}

const getByDate = async (from, to) => {
    if (!from) {
        console.log("no from")
        return await NeasModel.find({ discovery_date: { $lte: to } }, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1 }).sort({ discovery_date: 1 })
    }
    if (!to) {
        console.log("no from")
        return await NeasModel.find({ discovery_date: { $gte: from } }).sort({ discovery_date: 1 }, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1 })

    }
    console.log("okk")
    return await NeasModel.find({ discovery_date: { $gte: from, $lte: to } }, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1 }).sort({ discovery_date: 1 })

}

const getByPha = async (data) => {
    const pha = parseInt(data)
    
    if (pha >= 1) {

        return await NeasModel.find({ $and: [{ pha: "Y" }, { moid_au: { $lte: 0.05 } }, { h_mag: { $lte: 22.0 } }] }, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1 })
    }
    if (pha === 0) {

        return await NeasModel.find({ $and: [{ pha: "N" }, { moid_au: { $gte: 0.05 } }, { h_mag: { $gte: 22.0 } }] }, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1 })

    }

    if (pha <= -1) {
        return await NeasModel.find({ pha: "n/a"}, { _id: 0, designation: 1, discovery_date: 1, period_yr: 1})
    }
}






module.exports = {
    getOrbitClass,
    getByDate,
    getByPha
}