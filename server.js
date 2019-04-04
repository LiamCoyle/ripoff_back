

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

// use JWT auth to secure the api
app.use(jwt());

// api routes
const apiRoute = require('./route/api.route');
const userRoute = require('./route/user.route');
const productRoute = require('./route/product.route');

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/', apiRoute);



// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

