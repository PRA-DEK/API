var express = require('express');
var router = express.Router();
const meetings = require("../controllers/meetings.controller.js");

// Create a new Account
router.post("/", meetings.create);

module.exports = router;
