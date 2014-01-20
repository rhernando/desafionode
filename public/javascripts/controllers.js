// Managing the poll list
function JugadorListCtrl($scope, Jugador) {
	$scope.jugadores = Jugador.query();
}
// Voting / viewing poll results
function PollItemCtrl($scope, $routeParams) {
	$scope.poll = {};
	$scope.vote = function() {
	};
}
// Creating a new poll
function PollNewCtrl($scope) {
	$scope.poll = {
		question : '',
		choices : [ {
			text : ''
		}, {
			text : ''
		}, {
			text : ''
		} ]
	};
	$scope.addChoice = function() {
		$scope.poll.choices.push({
			text : ''
		});
	};
	$scope.createPoll = function() {
	};
}