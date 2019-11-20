const express = require('express');
const router = express.Router();

const itineraryModel = require('../models/itineraryModel');

// Get all itineraries
router.get('/all',
    (req, res) => {
        itineraryModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

// Get all itineraries for a specific city
router.get('/:id',
	(req, res) => {
        let cityRequested = req.params.id;
  		itineraryModel.find({ cityId: cityRequested })
			.then(itineraries => {
				res.send(itineraries);
			})
			.catch(err => console.log(err));
});

// Add a new itinerary
router.post('/', (req, res) => {
    const newItinerary = new itineraryModel({
        title: req.body.title,
        cityId: req.body.cityId,
        img: req.body.img,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hashtags: req.body.hashtags
    });

    newItinerary.save()
        .then(itinerary => {
            res.send(itinerary)
        }).catch(err => {
            res.send(err)
        });

});

module.exports = router;