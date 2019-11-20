// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;
const mongoose = require('mongoose');

const cityRouter = require("./api/cityRouter");
const itineraryRouter = require("./api/itineraryRouter");
const activityRouter = require("./api/activityRouter");

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Initialize Body-Parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Initialize Cors
app.use(cors());

// Connect to database
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

// Connect each url call to one API route
app.use("/cities", cityRouter);
app.use("/itineraries", itineraryRouter);
app.use("/activities", activityRouter);

app.listen(port, () => {
    console.log("Server is running on " + port + " port");
});