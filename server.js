var express = require('express');
var app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// var WORKERS = process.env.WEB_CONCURRENCY || 1;

// Heroku port
app.listen(process.env.PORT);
