const express = require('express');
const router = express.Router();

const cityModel = require('../models/cityModel');

// Get all cities
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

// Get a specific city by id
router.get('/:id',
	(req, res) => {
  		let cityRequested = req.params.id;
  		cityModel.findOne({ _id: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});

// Add a new city
router.post('/', (req, res) => {
    let cityExists = false;
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country
    })

    cityModel.find({}).then(cities => {
        cities.forEach(city => {
            if (city.name == newCity.name && city.country == newCity.country) {
                cityExists = true;
            }
        });
        if (!cityExists) {
            newCity.save()
                .then(city => {
                    res.send(city)
                })
                .catch(err => {
                    res.status(500).send("Server error")
                })
        } else {
            res.send('city exists');
        }
    });
});

module.exports = router;