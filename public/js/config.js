'use strict';

//Setting up route
angular.module('desafio').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/articles', {
                templateUrl: 'views/articles/list.html'
            }).
            when('/articles/create', {
                templateUrl: 'views/articles/create.html'
            }).
            when('/articles/:articleId/edit', {
                templateUrl: 'views/articles/edit.html'
            }).
            when('/articles/:articleId', {
                templateUrl: 'views/articles/view.html'
            }).
            when('/messages', {
                templateUrl: 'views/articles/list.html'
            }).
            when('/messages/create', {
                templateUrl: 'views/articles/create.html'
            }).
            when('/messages/:messageId/edit', {
                templateUrl: 'views/articles/edit.html'
            }).
            when('/messages/:messageId', {
                templateUrl: 'views/articles/view.html'
            }).
            when('/teams/new', {
                templateUrl: 'views/teams/select_league.html'
            }).
            when('/teams/newt', {
                templateUrl: 'views/teams/new.html'
            }).
            when('/', {
                templateUrl: 'views/index.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('desafio').config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);