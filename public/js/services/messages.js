'use strict';

//Articles service used for articles REST endpoint
angular.module('desafio.messages').factory('Messages', ['$resource', function($resource) {
    return $resource('messages/:messageId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);