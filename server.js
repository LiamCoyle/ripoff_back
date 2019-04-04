

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

// use JWT auth to secure the api
app.use(jwt());

// api routes

app.use('/user', require('./controller/user.controller'));
app.use('/product', require('./controller/product.controller'));


// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

