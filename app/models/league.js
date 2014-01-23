'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * League Schema
 */
var LeagueSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    max_teams: {
        type: Number,
        default: 10
    },
    max_players: {
        type: Number,
        default: 20
    },
    budget: {
        type: Number,
        default: 20000000
    },
    owner: {
        type: Schema.ObjectId,
        ref: 'Team'
    },
    teams: [
        {
            type: Schema.ObjectId,
            ref: 'Team'
        }
    ]
});

/**
 * Validations
 */
LeagueSchema.path('name').validate(function (name) {
    return name.length;
}, 'El Nombre no puede estar vacío');

mongoose.model('League', LeagueSchema);
