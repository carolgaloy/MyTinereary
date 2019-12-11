const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const key = require("../keys");
const jwt = require("jsonwebtoken");

const userModel = require('../models/userModel');

router.post('/', (req, res) => {

    if (!req.body.email || !req.body.password) {
        return res.send("Please fill all the fields");
    }

    var email = req.body.email;
    var password = req.body.password;

    userModel.findOne({email: email})
        .then(user => {
                if (!user) {
                    return res.status(403).send("This user does not exist");
                }

                bcrypt.compare(password, user.password)
                    .then(matches => {
                        if(!matches) {
                            res.status(403).send("Sorry, the passwords don't match");
                        }

                        const payload = {
                            id: user._id,
                            username: user.email,
                            avatarPicture: user.photo
                        };

                        const options = {expiresIn: 2592000};

                        jwt.sign(
                            payload,
                            key.secretOrKey,
                            options,
                            (err, token) => {
                                if(err){
                                    res.json({
                                    success: false,
                                    token: "There was an error"
                                    });
                                } else {
                                    res.json({
                                    success: true,
                                    token: token
                                    });
                                }
                            }
                        );
                    }
                )
            }
        );

});

module.exports = router;