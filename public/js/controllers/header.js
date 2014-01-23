'use strict';

angular.module('desafio.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': '#!/articles'
    }, {
        'title': 'Create New Article',
        'link': '#!/articles/create'
    }];

    console.log($scope.menu);
    if (Global.user){
	    if (Global.user.teams.length > 0){
			$scope.menu.push({'misequipos' : 'ajajaja' ,'link' : '#!/newteam'})
	    }else{
	    	$scope.menu.push({'title' : 'Crear Equipo' ,'link' : '/teams/new'})
	    }
    	
    }
    
    $scope.isCollapsed = false;
}]);