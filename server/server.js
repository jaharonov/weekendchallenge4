var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var poolModule = require('./modules/pool.js');
var pool = poolModule;
// Serve up static files
app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // Used for jQuery



// Start up the server
app.listen(port, function () {
    console.log('listening on port', port);
});