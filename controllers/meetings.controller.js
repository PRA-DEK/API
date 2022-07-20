const db = require("../models");
const axios = require('axios');
const FormData = require('form-data');
const { response } = require("express");
const Meeting = db.Meeting;
const Op = db.Sequelize.Op;

// Create and Save a new Meeting
exports.create = async (req, res) => {

    // Validate request
    if (!req.files.image) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    currentDate = new Date();
    responseAI = await askAI(req.files.image);

    if(!responseAI.found) {
        res.status(500).send({
            message: responseAI.message
        });
        return;
    }

    //TODO le user_id ne se met pas à jour
    // Create a meetings
    const meeting = {
        user_id: req.body.user_id,
        bird_id: responseAI.birds,
        date: currentDate,
        place: req.body.place,
        weather: req.body.weather,
        quantity: req.body.quantity
    };
    
    // Save Meeting in the database
    Meeting.create(meeting)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Photo."
        });
    });

};

async function askAI (file) {
    url = "url/AI";
    form = new FormData();
    form.append('image', file.data, file.name);
    responseAI = {};

    await axios.post(url, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (response) {
        responseAI = { birds: response, found: true, message: "Everything is all right." }
    })
    .catch(function (error) {
        responseAI = {birds: false, found: false, message: error.message || "Something went wrong, please try again."}
    });

    return responseAI;
}
