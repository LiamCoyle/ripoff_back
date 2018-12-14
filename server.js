/*
let express = require('express');

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

var cors = require('cors');
let app = express();

app.use(cors({origin: 'http://localhost:4200'}));

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://admin:root123@ds249503.mlab.com:49503/integration_front_back');
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App

app.use('/api', require('./routes/api.route'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});*/

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 81 : 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

