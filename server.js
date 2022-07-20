const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

var corsOption = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(fileUpload({ createParentPath: true }));


//On se connecte à la base de données
const db = require("./models");
db.sequelize.sync();

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

meetings = require("./routes/meetings.routes");
app.use('/meetings', meetings);

app.listen(4000, () => {
    console.log("Serveur à l'écoute");
});
