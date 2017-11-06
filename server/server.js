var express = require('express');
var gateway = require('./gateway');
var app = express();
var server = require('http').Server(app);

// MIDDLEWARES de Express
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');


// configuracion express
var port = process.env.PORT || 8080; // set the port

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(cors());
app.use('/api2',gateway);


server.listen(port);
console.log("App listening on port " + port);
