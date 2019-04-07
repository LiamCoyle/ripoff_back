require('rootpath')();
let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let errorHandler = require('_helper/error-handler');
let mongoose = require('mongoose').set('debug', true);;
let config = require('config.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); //{origin: 'http://localhost:4200'}


mongoose.connect(config.connectionString,  {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// api routes
let apiRoute = require('./route/api.route');
let userRoute = require('./route/user.route');
let productRoute = require('./route/product.route');
let brandRoute = require('./route/brand.route');
let siteRotue = require('./route/site.route');
let categoryRoute = require('./route/category.route');
let productTypeRoute = require('./route/productType.route');
let alerteRoute = require('./route/alerte.route');

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/alerte', alerteRoute);
app.use('/brand', brandRoute);
app.use('/site', siteRotue);
app.use('/category', categoryRoute);
app.use('/productType', productTypeRoute);
app.use('/', apiRoute);



// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

