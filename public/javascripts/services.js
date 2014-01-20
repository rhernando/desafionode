angular.module('jugadorServices', [ 'ngResource' ]).factory('Jugador',
		function($resource) {
			return $resource('jugador/:jugadorId', {}, {
				// Use this method for getting a list of polls
				query : {
					method : 'GET',
					params : {
						jugadorId : 'jugadores'
					},
					isArray : true
				}
			})
		});