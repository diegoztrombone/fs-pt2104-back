const mongoose = require("mongoose")
const { Schema } = mongoose

const NeasSchema = new Schema({
    designation: {
        type: String,
        require: true,
    },
    discovery_date: {
        type: Date,
        require: true,
    },
    h_mag: {
        type: Number,
        require: true,
    },
    moid_au: {
        type: Number,
        require: true,
    },
    q_au_1: {
        type: Number,
        require: true,
    },
    q_au_2: {
        type: Number,
        require: true,
    },
    period_yr: {
        type: Number,
        require: true,
    },
    i_deg: {
        type: Number,
        require: true,
    },
    pha: {
        type: String,
        require: true,
    },
    orbit_class: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('NeasCollection', NeasSchema)

