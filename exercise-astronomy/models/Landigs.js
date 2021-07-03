const mongoose = require("mongoose")
const { Schema } = mongoose

const GeoSchema = {
    latitude: {
        type: Number,
        require: true,
    },
    longitude: {
        type: Number,
        require: true,
    }
}

const LandingSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        require: true,
    },
    recclass: {
        type: String,
        require: true,
    },
    mass: {
        type: Number,
        require: true,
    },
    fall: {
        type: String,
        require: true,
    },
    year: {
        type: String,
        require: true,
    },
    reclat: {
        type: Number,
        require: true,
    },
    reclong: {
        type: Number,
        require: true,
    },
    geolocation: {
        type: GeoSchema,
        require: true,
    },
})

module.exports = mongoose.model('LandingsCollection', LandingSchema, 'LandingsCollection')