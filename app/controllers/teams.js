'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Team = mongoose.model('Team'),
    _ = require('lodash');

/**
 * Create a team
 */
exports.create = function(req, res) {
    var team = new Team(req.body);
    team.user = req.user;

    team.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                team: team
            });
        } else {
            res.jsonp(team);
        }
    });
};

exports.new = function(req, res) {
    console.log(req.user);
    res.render('teams/newteam', {
        title: 'Nuevo Equipo',
        user: req.user ? JSON.stringify(req.user) : 'null',
        message: req.flash('error')
    });
};
