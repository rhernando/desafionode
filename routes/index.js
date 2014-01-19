/*
 * GET home page.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'desafiomundial');
var JugadorSchema = require('../models/Jugador.js').JugadorSchema;
var Poll = db.model('jugadores', JugadorSchema);

exports.index = function(req, res) {
	res.render('index', {
		title : 'Desafío Fútbol: el Mundial'
	});
};