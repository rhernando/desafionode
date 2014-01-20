var mongoose = require('mongoose');
var equipoSchema = new mongoose.Schema({
	nombre : 'String'
});
exports.JugadorSchema = new mongoose.Schema({
	apodo : 'String',
	equipoId : [equipoSchema]
});
