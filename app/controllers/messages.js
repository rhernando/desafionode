'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    _ = require('lodash');


/**
 * Find message by id
 */
exports.message = function(req, res, next, id) {
    Message.load(id, function(err, message) {
        if (err) return next(err);
        if (!message) return next(new Error('Failed to load message ' + id));
        req.message = message;
        next();
    });
};

/**
 * Create a message
 */
exports.create = function(req, res) {
    var message = new Message(req.body);
    message.user = req.user;

    message.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                message: message
            });
        } else {
            res.jsonp(message);
        }
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {
    var message = req.article;

    message = _.extend(message, req.body);

    message.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                message: message
            });
        } else {
            res.jsonp(message);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var message = req.article;

    message.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                message: message
            });
        } else {
            res.jsonp(message);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.message);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Message.find().sort('-created').populate('user', 'name username').exec(function(err, messages) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(messages);
        }
    });
};