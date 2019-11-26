const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    itineraryId: {
        type: String,
        required: true
    },
    cityId: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    photo: {
        type: String
    },
    duration: {
        type: Number
    },
    price: {
        type: String
    },
    comments: {
        type: Array
    }
})

//name if module is the singular of how the database is called
module.exports = mongoose.model('activity', activitySchema);