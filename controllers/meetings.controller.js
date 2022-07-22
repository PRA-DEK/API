const db = require("../models");
const axios = require('axios');
const FormData = require('form-data');
const Meeting = db.Meeting;
const Birds = db.Birds;
const Op = db.Sequelize.Op;

// Create and Save a new Meeting
exports.create = async (req, res) => {

    // Validate request
    if (!req.files) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Valide if there is an image
    if (!req.files.image) {
        res.status(400).send({
            message: "Image not found!"
        });
        return;
    }

    currentDate = new Date();
    responseAI = await askAI(req.files.image);

    // Verify if we found the bird
    if(!responseAI.birds) {
        res.status(500).send({
            message: responseAI.message
        });
        return;
    }

    // We get the id of the bird found
    bird = await Birds.findOne({ where: { scientific_name: responseAI.birds } });

    // If the bird is not in the database
    if(bird == null) {
        res.status(500).send({message: 'Bird not found'});
        return;
    }

    // Create a meetings
    const meeting = {
        user_id: req.body.user_id,
        bird_id: bird.id,
        date: currentDate,
        place: req.body.place,
        weather: req.body.weather,
        quantity: req.body.quantity
    };
    
    // Save Meeting in the database
    meetings = await Meeting.create(meeting)
    .then(data => {
        res.status(200).send({
            species: responseAI.birds
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Photo."
        });
    });

};

async function askAI (file) {
    url = "http://localhost:5000/predict";
    formData = new FormData();
    formData.append('image', file.data, file.name);
    responseAI = {};

    await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (response) {
        responseAI = { birds: response.data, message: "Everything is all right." }
    })
    .catch(function (error) {
        responseAI = { birds: null, message: error.message || "Something went wrong, please try again." }
    });

    return responseAI;
}
