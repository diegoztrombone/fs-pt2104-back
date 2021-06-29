const mongoose = require("mongoose")
const { Schema } = mongoose

const AdressSchema = new Schema({
    building: {
        type: String,
        required: true,
    },

    coord: [{
        type: Number,
        required: true,
    }],

    street: {
        type: String,
        required: true,
    },

    zipcode: {
        type: String,
        required: true,
    },

})

const DateSchema = new Schema({
    Sdate: {
        type: Number,
        required: true,
    }
})
const GradesObjectSchema = new Schema({
    date: {
        type: DateSchema,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,

    }

})

const RestaurantSchema = new Schema({
    address: {
        type: AdressSchema,
        required: true,
    },
    borough: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    grades: [{
        type: GradesObjectSchema,
        required: true,
    }],

})




const Restaurants = mongoose.model("RestaurantsCollection", RestaurantSchema)

module.exports = Restaurants