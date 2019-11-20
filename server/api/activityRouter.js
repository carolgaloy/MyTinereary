const express = require('express');
const router = express.Router();

const activityModel = require('../models/activityModel');

// Get all activities
router.get('/all',
    (req, res) => {
        activityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

// Get all activities for a specific city
router.get('/:id',
	(req, res) => {
        let itineraryRequested = req.params.id;
  		activityModel.find({ itineraryId: itineraryRequested })
			.then(activities => {
				res.send(activities);
			})
			.catch(err => console.log(err));
});

// Add a new itinerary
router.post('/', (req, res) => {
    const newActivity = new activityModel({
        name: req.body.name,
        itineraryId: req.body.itineraryId,
        address: req.body.address,
        photo: req.body.photo,
        duration: req.body.duration,
        price: req.body.price,
        comments: req.body.comments
    });

    newActivity.save()
        .then(activity => {
            res.send(activity)
        }).catch(err => {
            res.send(err)
        });

});

module.exports = router;