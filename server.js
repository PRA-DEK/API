const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API of Etno',
            version: '0.2.0',
        },
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.listen(4000, () => {
    console.log("Serveur à l'écoute");
});
