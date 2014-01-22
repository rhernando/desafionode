'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables 
var config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function (path) {
    fs.readdirSync(path).forEach(function (file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

// Bootstrap passport config
require('./config/passport')(passport);

var app = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);


// Express settings
require('./config/express')(app, passport, db);

// Bootstrap routes
require('./config/routes')(app, passport, auth);

// Start the app by listening on <port>
var port = process.env.PORT || config.port;

server.listen(port);
//app.listen(port);
console.log('Express app started on port ' + port);

io.sockets.on('connection', function (socket) {
    socket.emit('init', { username: 'Sistema', type: 'System', content: 'Iniciando chat' });

    socket.broadcast.emit('user:join', {
        //name: name
    });
    // broadcast a user's message to other users
    socket.on('send:message', function (data) {
        console.log(data);
        socket.broadcast.emit('send:message', {

            username: data.username,
            content: data.content
        });
    });
    //  when a user leaves broadcast it to other users
    socket.on('disconnect', function () {
        socket.broadcast.emit('user:left', {
           // name: name
        });
    });
});

// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
exports = module.exports = app;
