
let express = require('express');

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

var cors = require('cors');
let app = express();

app.use(cors({origin: 'http://localhost:1337'}));

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://admin:admin123@ds119988.mlab.com:19988/ripoff');
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
});

