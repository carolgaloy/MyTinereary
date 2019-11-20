const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    cityId: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    price: {
        type: String
    },
    hashtags: {
        type: Array
    }
})

//name if module is the singular of how the database is called
module.exports = mongoose.model('itinerary', itinerarySchema);