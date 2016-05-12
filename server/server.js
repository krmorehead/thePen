var express = require('express');
var path = require('path')
var app = express();
var mainController = require('./db/mainController')
var bodyParser = require('body-parser');


require('./session').setup(app, express)
//to make sure the POST are decoded correctly
app.use(bodyParser.json());
//establish the API routes
require('./apiRoutes')(app, express)


//find all of the assets for our page
app.use(express.static(__dirname+'/../client/'));

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8001;

// set the home page route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/../client/index.html'))
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});