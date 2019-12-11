const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const key = require("../keys");
const jwt = require("jsonwebtoken");

const userModel = require('../models/userModel');

// Get all users
router.get('/all',
    (req, res) => {
        userModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

// Add a new user
router.post('/', (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password || !req.body.photo) {
        return res.send("There can't be empty fields");
    }

    //var email = req.body.email;
    var userExists;

    userModel.findOne({email: req.body.email})
        .then(user => {
                if (user) {
                    return res.status(403).send("This email already exists in our database");
                }
            }
        );

    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        photo: req.body.photo,
    });

    bcrypt.hash(req.body.password, 10, function(err, hash) {

        if (err) throw err;

        newUser.password = hash;

        newUser.save()
        .then(user => {
            res.send(user)
        }).catch(err => {
            res.send(err)
        });

    });

});

module.exports = router;