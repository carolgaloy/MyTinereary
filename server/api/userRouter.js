const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require("passport");

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

// Check if an user already exists and get all the info
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      userModel
        .findOne({ _id: req.user.id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  );

// Add a new user
router.post('/', (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password || !req.body.photo) {
        return res.send("There can't be empty fields");
    }

    userModel.findOne({email: req.body.email})
        .then(user => {
                if (user) {
                    return res.status(403).send({ error: "This email already exists in our database" });

                } else {

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
                }
            }
        );

});

module.exports = router;