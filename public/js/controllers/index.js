'use strict';

angular.module('desafio.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    //console.log(Global.user);
}]);