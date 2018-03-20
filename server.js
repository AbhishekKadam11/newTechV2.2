var express = require('express');
var app = express();
var compression = require('compression');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(compression()); //compressing dist folder
// Start the app by listening on the default
// var WORKERS = process.env.WEB_CONCURRENCY || 1;

// Heroku port
// app.listen(process.env.PORT);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
  console.log('Listening on port %d', server_port);
});
