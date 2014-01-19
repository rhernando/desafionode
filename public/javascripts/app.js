angular.module('desafio', []).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/jugadores', {
				templateUrl : 'partials/listJugadores.html',
				controller : JugadorListCtrl
			}).when('/jugador/:jugadorId', {
				templateUrl : 'partials/jugador.html',
				controller : PollItemCtrl
			}).when('/new', {
				templateUrl : 'partials/new.html',
				controller : PollNewCtrl
			}).otherwise({
				redirectTo : '/'
			});
		} ]);
