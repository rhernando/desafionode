'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3003,
	db: process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://localhost/desafiojs-dev',

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'MEAN',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions',
    mailer: {
        auth: {
            user: 'hablandoencuero@gmail.com',
            pass: ''
        },
        defaultFromAddress: 'Desafio Futbol <desafiofutbol2013@gmail.com>'
    }
}
